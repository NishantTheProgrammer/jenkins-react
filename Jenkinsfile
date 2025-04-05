pipeline {
    agent any

    stages {
        stage('Hello') {
            agent{
                docker{
                    image 'node:18-alpine'
                    args '--user node'
                }
            }
          
            steps {
                sh '''
                echo 'hello world'
                npm --version
                node --version
                ls
                npm config get cache
                npm config get prefix
                npm cache clean --force
                npm i -f
                npm run build
                ls
                '''
            }
        }
    }
}
