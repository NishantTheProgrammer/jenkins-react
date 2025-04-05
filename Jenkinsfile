pipeline {
    agent none  // No agent defined at the top level, we'll specify it inside each stage

    stages {
        stage('Setup and Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '--user node'
                    reuseNode true
                }
            }
          
            steps {
                sh '''
                echo 'hello world'
                npm --version
                node --version
                npm install
                npm run build
                ls
                '''
            }
        }

        stage('Run Server and Tests') {
            agent {
                docker {
                    image 'cypress/included:14.2.1'  // Use the official Cypress image
                    args '--user node --entrypoint=""'  // Disable the default ENTRYPOINT
                    reuseNode true
                }
            }
        
            steps {
                sh '''
                # Start a temporary server in the background
                npx serve -s dist -l 3000 &
                SERVER_PID=$!

                # Wait for 10 seconds to ensure the server is up and running
                echo "Waiting for server to start..."
                sleep 10
                 
                # Run Cypress tests
                echo "Running Cypress tests..."
                npx cypress run  # Run Cypress tests

                # Ensure Cypress tests complete before shutting down the server
                echo "Cypress tests complete. Stopping the server..."

                # Stop the server after the tests are complete
                kill $SERVER_PID
                echo "Server stopped"
                '''
            }
        }

        stage('Deploy') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '--user node'
                    reuseNode true
                }
            }
            steps {
                echo 'Deploying...'
                // Add your deploy script here
                // For example:
                // sh 'scp -r dist/ user@server:/path/to/deploy'
            }
        }
    }
}
