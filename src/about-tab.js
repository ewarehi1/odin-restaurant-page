import {bin} from './index'

const aboutTab = function() {
    const header = document.createElement('h2')
    header.textContent = 'About'

    const info = document.createElement('div')
    info.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis dictumst magna neque dui; imperdiet nascetur et eget. Hendrerit sem enim tristique dapibus quis ut libero. Per dis montes montes nunc etiam justo. Etiam netus est habitasse ligula diam magna consequat luctus. Nec lacinia libero lectus consectetur curabitur penatibus. Porta ullamcorper ornare interdum congue quisque pellentesque. Natoque sollicitudin lacinia et efficitur auctor. Magnis quam himenaeos habitasse blandit ad lectus felis adipiscing viverra.\n Laoreet quis eget montes ultrices quis dictum. Libero dolor quisque nisl velit ligula himenaeos aptent. Nunc viverra sem torquent hac libero. Curae fringilla suspendisse commodo fames malesuada orci. Ipsum duis pulvinar natoque platea congue justo justo per. Magna ornare hac vestibulum rutrum, imperdiet velit. Pulvinar bibendum erat dignissim; finibus egestas vestibulum finibus suscipit.\n Turpis nisi magna urna taciti curae dapibus. Sed curabitur potenti iaculis massa lobortis lacus interdum. Ex vehicula in porta eleifend auctor molestie vitae interdum. Velit eleifend egestas posuere quis consequat, aptent penatibus porta. Conubia magnis consectetur iaculis egestas vestibulum auctor. At sapien convallis arcu scelerisque cras mi proin conubia. Praesent odio mollis sem sem aenean torquent.\n Nullam hendrerit pellentesque platea habitasse tempor cubilia risus praesent. Platea mattis erat suspendisse feugiat, pharetra fusce fusce et inceptos. Cras quisque felis morbi venenatis cursus. Fringilla nec elit; platea dignissim pharetra auctor risus. Viverra convallis hac tempor feugiat conubia mollis sodales. Mus dignissim congue urna nisl mauris adipiscing. Primis potenti purus pulvinar placerat justo tortor.\n Enim volutpat accumsan etiam mattis ipsum. Semper magnis velit metus primis auctor donec. Mus mi nisi senectus lectus laoreet. Fusce nostra placerat mollis leo curabitur consequat per. Porta magnis lacus velit platea vestibulum. Congue donec curabitur gravida turpis quis ultricies. Nascetur dapibus dapibus sodales feugiat sapien curabitur. Elementum suscipit dui nostra aenean pharetra.'

    bin.append(header, info)
}

export { aboutTab }