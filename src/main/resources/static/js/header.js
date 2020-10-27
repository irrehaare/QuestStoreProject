document.write(`

<body class="page">
    <div id="header">
        <div id="header-left">
            <h1>Quest Store</h1>
            <div class="search-field">
            </div>
        </div>
        <div class="header-menu">
            <div class="header-menu-option" id="notifications">
                <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 611.999 611.999" style="enable-background:new 0 0 611.999 611.999;" xml:space="preserve">
                    <g>
                        <g>
                            <g>
                                <path class="menu-icon" d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203
                                    C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578
                                    c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626
                                    h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856
                                    c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626
                                    C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32
                                    c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082
                                    c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z
                                     M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826
                                    c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485
                                    c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"/>
                                <path class="menu-icon" d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258
                                    c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258
                                    C323.259,126.96,315.532,119.235,306.001,119.235z"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="header-menu-option" id="cart">
                <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="5 7 22 22">
                    <path class="menu-icon" d="M5 7c-.552 0-1 .448-1 1s.448 1 1 1h2.22l2.624 10.5c.223.89 1.02 1.5 1.937 1.5h11.47c.903 0 1.67-.6 1.907-1.47L27.75 10H11l.5 2h13.656l-1.906 7H11.78L9.157 8.5C8.934 7.61 8.137 7 7.22 7H5zm17 14c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zm9 0c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1z"/></svg>
            </div>
            <div class="header-menu-option" id="profile" onclick="goToProfile()" th:onclick="goToProfile()">
                <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path>
                    <g class="" transform="translate(0,0)" style="touch-action: none;">
                        <path class="menu-icon" d="M356.1 32.57l50 25c-2.2 8.68-9.2 22.47-20.1 37.29C372.7 113 354.4 133.3 335.6 152c-18.7 18.8-38.1 36.2-53.5 48.7-7.7 6.2-14.5 11.3-19.6 14.6-2.5 1.6-4.6 2.9-6 3.6-.3.1-.3.1-.5.1s-.2 0-.5-.1c-1.4-.7-3.5-2-6-3.6-5.1-3.3-11.9-8.4-19.6-14.6-15.4-12.5-34.8-29.9-53.5-48.7-18.8-18.7-37.1-39-50.4-57.13-10.9-14.83-17.9-28.62-20.1-37.3l50-25c14.6 29.73 29.3 62.14 44.2 90.03 16.2 30.5 31.6 55.7 51.9 65.9l4 2 4-2c20.3-10.2 35.7-35.4 51.9-65.9 14.9-27.89 29.6-60.31 44.2-90.03zM256 141.4c7.9 0 15.5.7 22.7 1.9-8.2 12.2-16 21.5-22.7 26.5-6.7-5-14.5-14.3-22.7-26.5 7.2-1.2 14.8-1.9 22.7-1.9zm83.1 32.5c23.3 22.7 35.9 54.6 35.9 86.5v.6c-33-12-75.9-17.6-119-17.6-43.1 0-86 5.6-119 17.6v-.6c0-31.9 12.6-63.8 35.9-86.5 16.2 15.6 32.2 29.8 45.7 40.7 8 6.5 15.1 11.9 21 15.7 2.9 2 5.5 3.5 8 4.7 2.5 1.2 4.4 2.4 8.4 2.4s5.9-1.2 8.4-2.4 5.1-2.7 8-4.7c5.9-3.8 13-9.2 21-15.7 13.5-10.9 29.5-25.1 45.7-40.7zm64.3 38.3c20.6 20 31.5 26.2 63.8 37.3-12.6 24.9-25.9 47.1-57 61.2l-17.3-52c-.1-5.7-.5-11.4-1.3-17.1zm-294.8 0l11.8 29.4c-.8 5.7-1.2 11.4-1.3 17.1l-17.3 52c-31.11-14.1-44.41-36.3-57.01-61.2 32.3-11.1 43.2-17.3 63.81-37.3zM265 261.5c45.1.9 89.3 8.7 117.2 22.2l28.4 85-43.3-19.8c-3.9-23.6-6.3-46.3-6.3-58.5v-14.6l-13 6.5c-27.9 14-55.5 21.6-83 23zm-18 0v43.8c-27.5-1.4-55.1-9-83-23l-13-6.5v14.6c0 12.2-2.4 34.9-6.3 58.5l-43.3 19.8 28.4-85c27.9-13.5 72.1-21.3 117.2-22.2zm96.6 42.8c1.3 18.6 4.8 43.5 9.6 67.6 3 15.4 6.6 30.2 10.5 42.4 3.9 12.3 7.3 21.8 13.9 28.5l2.7 2.6h3.7c14.1 0 38.9 1.2 52.7 9.6-1.8 1.4-4.8 3.2-8.7 4.9-9.4 4-23.9 7.7-41.5 10.6-35.2 5.9-82.9 8.9-130.5 8.9-47.6 0-95.3-3-130.5-8.9-17.6-2.9-32.11-6.6-41.51-10.6-3.9-1.7-6.9-3.5-8.7-4.9 13.7-8.4 38.61-9.6 52.71-9.6h3.7l2.7-2.6c6.6-6.7 10-16.2 13.9-28.5 3.9-12.2 7.5-27 10.5-42.4 4.8-24.1 8.3-49 9.6-67.6 58 25.3 117.2 25.3 175.2 0zm-202.8 66.2c-2.9 14.1-6.2 27.6-9.6 38.4-2.9 9.1-6.1 15.3-8.1 18.5-11.2-.1-27.71 0-43.01 5.1l13.5-40.4zm230.4 0l47.2 21.6 13.5 40.4c-15.3-5.1-31.8-5.2-43-5.1-2-3.2-5.2-9.4-8.1-18.5-3.4-10.8-6.7-24.3-9.6-38.4z"
                              fill="#fff" fill-opacity="1"></path></g></svg>
            </div>
            <div class="header-menu-option" id="sign-out" onclick="logout()" th:onclick="logout()">
                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <g id="XMLID_2_">
                        <path class="menu-icon" id="XMLID_6_" d="M208.5,433.8c0,0.9,0,2.8,0,6.5c0,3.7,0,6.5,0,8.4s0,4.7-0.9,7.4s-1.9,4.7-3.7,6.5c-1.9,1.9-3.7,1.9-6.5,1.9
                            H94c-26.1,0-48.4-9.3-66.1-27.9C9.3,418,0,395.6,0,370.5v-229c0-26.1,9.3-48.4,27.9-66.1s41-27.9,66.1-27.9h104.3
                            c2.8,0,5.6,0.9,7.4,2.8c1.9,1.9,2.8,4.7,2.8,7.4c0,0.9,0,2.8,0,6.5c0,3.7,0,6.5,0,8.4c0,1.9,0,4.7-0.9,7.4
                            c-0.9,2.8-1.9,4.7-3.7,6.5c0,1.9-2.8,1.9-5.6,1.9H94c-14,0-27,4.7-37.2,14.9s-14.9,22.3-14.9,37.2v229.9c0,14,4.7,27,14.9,37.2
                            C67,418,79.1,422.6,94,422.6h101.5h3.7l3.7,0.9l2.8,1.9l1.9,2.8L208.5,433.8z M512,256c0,5.6-1.9,10.2-6.5,14.9L328.6,448.7
                            c-3.7,3.7-9.3,6.5-14.9,6.5s-10.2-1.9-14.9-6.5c-3.7-3.7-6.5-9.3-6.5-14.9v-94H146.2c-5.6,0-10.2-1.9-14.9-6.5
                            c-4.7-4.7-6.5-9.3-6.5-14.9V193.6c0-5.6,1.9-10.2,6.5-14.9c3.7-3.7,9.3-6.5,14.9-6.5h146.2v-94c0-5.6,1.9-10.2,6.5-14.9
                            c3.7-3.7,9.3-6.5,14.9-6.5s10.2,1.9,14.9,6.5l177.8,177.8C510.1,245.8,512,250.4,512,256z"/>
                    </g>
                </svg>
            </div>
        </div>
    </div>
    <div id="content-view">
        <div id="content">
`);
