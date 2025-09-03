pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/arpitag1011/react-selenium-tests.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Start App') {
            steps {
                bat 'nohup npm start &'
                sleep 20
            }
        }

        stage('Run Selenium Tests') {
            steps {
                bat 'npm run test:selenium || true'
            }
        }

        stage('Publish Results') {
            steps {
                junit '**/test-results.xml'
            }
        }
    }
}
