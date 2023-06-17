const parseArgs = () => {
    // Write your code here 
    const givenArgs = process.argv.splice(2);
    let result = '';
    for (let i = 0; i < givenArgs.length; i++) {
      const element = givenArgs[i];
      if (element.substring(0, 2) === '--') {
        result += `${givenArgs[i].substring(2)} is ${givenArgs[i + 1]}, `
        i++;
      }
    }
    console.log(result.substring(0, result.length - 2));
};

parseArgs();