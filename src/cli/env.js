const parseEnv = () => {
    // Write your code here 
    let result = '';

    const envVars = Object.keys(process.env);
    const RSSVars = envVars.filter((key) => key.slice(0, 4) === 'RSS_');
    RSSVars.forEach((key) => result += `${key}=${process.env[key]}; `);
    console.log(result);
};

parseEnv();