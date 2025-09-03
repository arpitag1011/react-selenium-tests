pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/arpitag1011/react-selenium-tests.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start App') {
            steps {
                sh 'nohup npm start &'
                sleep 20
            }
        }

        stage('Run Selenium Tests') {
            steps {
                sh 'npm run test:selenium || true'
            }
        }

        stage('Publish Results') {
            steps {
                junit '**/test-results.xml' // if using JUnit reporter
            }
        }
    }
}
