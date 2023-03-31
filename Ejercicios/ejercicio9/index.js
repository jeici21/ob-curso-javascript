const logger = require("./logger");

function miError() {
    throw new Error("Soy un error");
}

try {
    const error = miError();
    logger.info(error);
} catch (e) {
    logger.error(`Error: ${e}`);
}
