node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

        def customImage = docker.build("hamster2222/docker")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
