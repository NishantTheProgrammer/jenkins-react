pipeline {
    agent any

    stages {
        stage('Hello') {
            agent{
                docker{
                    image 'node:18-alpine'
                }
            }
          
            steps {
                sh '''
                sudo chown -R $(whoami) ~/.npm
                echo 'hello world'
                npm --version
                node --version
                ls
                npm cache clean --force
                npm i -f
                npm run build
                ls
                '''
            }
        }
    }
}
