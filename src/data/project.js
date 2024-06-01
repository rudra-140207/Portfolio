import images from "../constants/images"

const project = [
    {
        key: 1,
        img: images.apiverse ,
        name: "APIverse",
        description: " Engineered a user-friendly interface enabling seamless registration and API key generation, significantly enhancing data accessibility for developers. Optimized platform performance to handle over 10,000 API calls daily, with dynamic scaling capabilities to maintain response times below 400 milliseconds.",
        techStack: ['Node.js', 'Express.js', 'React.js', 'MongoDB','Tailwind CSS','Render'],
        complete: true,
        liveDeploy:"https://apiverse-07.onrender.com",
        sourceCode:"https://github.com/rudra-140207/APIverse-Frontend"
    },
    {
        key: 2,
        img: images.retrofiles ,
        name: "RetroFiles",
        description: "Developed a MERN app where users can contribute, explore, and engage with memories without the hassle of logging in as use of cookies ensures a seamless experience while maintaining security and control .",
        techStack: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Render'],
        complete: true,
        liveDeploy: "https://retrofiles-07.onrender.com/",
        sourceCode: "https://github.com/rudra-140207/RetroFiles_Frontend"
    },
    {
        key: 3,
        img: images.cryptoGalaxy,
        name: "Crypto Galaxy",
        description: "Crafted a all-in-one destination for navigating the dynamic world of cryptocurrency. The platform offers real-time access to multiple cryptocurrency exchanges and coins , empowering both seasoned traders and newcomers to make informed decisions in the crypto mark .",
        techStack: ['React.js','API','MUI'],
        complete: true,
        liveDeploy: "https://crypto-galaxy-07.onrender.com/",
        sourceCode: "https://github.com/rudra-140207/Crypto_Galaxy"
    },
    {
        key: 4,
        img: images.urlShortner ,
        name: "URL Shortner",
        description: "Crafted a URL shortener with a user dashboard where authenticated users can view their previously shortened URLs, delete them if needed, copy them for reuse and add new links to be shortened .",
        techStack: ['CSS','Ejs','MongoDB', 'Node.js','Express.js'],
        complete: true,
        liveDeploy: "https://url-shortner-07.onrender.com",
        sourceCode: "https://github.com/rudra-140207/Auth_URL_Shortner"
    },
    {
        key: 5,
        img: images.weatherApp,
        name: "Weather App",
        description: "Developed a weather app for providing real-time weather information . Check it out and stay informed about the weather effortlessly !",
        techStack: ['Ejs','CSS','Node.js','Express.js'],
        complete: true,
        liveDeploy:"https://weather-app-07.onrender.com",
        sourceCode: "https://github.com/rudra-140207/weather_app"
    },
    
    
]

export default project;