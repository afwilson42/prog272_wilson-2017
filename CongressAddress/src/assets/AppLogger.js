/**
 * Created by charlie on 4/18/17.
 *
 * At the command line set the ELF_LOGGER environment variable
 * to the name of the module you want to debug:
 *
 *  export ELF_LOGGER='address'
 *
 * Then start your application and use it like this:
 *
 *   import Logger from '../elf-logger';
 *   const logger = new Logger('address', 'blue', 'yellow', '24px');
 *   logger.log('Hello logger', 'param two', 'param three');
 */

const AppLogger = class {

    constructor(loggerInit, colorInit, bgInit, fontSizeInit) {
        this.display = false;
        if (!colorInit) {
            colorInit = 'blue';
        }
        if (!bgInit) {
            bgInit = 'yellow';
        }
        if (!fontSizeInit) {
            fontSizeInit = '18px';
        }
        this.textStyle = 'color: ' + colorInit +
            '; background-color: ' + bgInit +
            '; font-size: ' + fontSizeInit;
        this.titleStyle = 'font-size: ' + fontSizeInit;
        this.logger = loggerInit;
        this.log = this.log.bind(this);
        this.setLogger = this.setLogger.bind(this);
    }

    log(message1, message2 = '', message3 = '') {
        if (this.logger !== process.env.ELF_LOGGER) {
            console.info('%c %s: %c %s %s %s',
                this.titleStyle, this.logger, this.textStyle,
                message1, message2, message3);
        }
    }

    setLogger(newValue) {
        this.logger = newValue;
    };
};

export default AppLogger;
