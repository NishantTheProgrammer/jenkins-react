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
                echo 'hello world'
                npm --version
                node --version
                ls
                npm i -f
                npm run build
                ls
                '''
            }
        }
    }
}
