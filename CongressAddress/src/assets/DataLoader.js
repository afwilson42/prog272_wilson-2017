/**
 * Created by bcuser on 5/10/17.
 */

import Logger from '../assets/ElfLogger.js';
const logger = new Logger('data-loader', 'yellow', 'green', '18px');
import { getByIndex, saveByIndex, clearLocalStorage } from '../assets/local-storage';

export default class DataLoader {

    constructor() {
        this.STORE_SET = ['elven-store', 'loaded', 'elven-count'];
        this.loadAddresses = this.loadAddresses.bind(this);
    }

    dataLoaded() {
        const elfStore = localStorage.getItem(this.STORE_SET[0]);
        return (elfStore === this.STORE_SET[1]);
    }

    setLocalStorage(addresses) {
        logger.log('SET LOCAL', addresses);
        localStorage.setItem(this.STORE_SET[0], this.STORE_SET[1]);
        localStorage.setItem(this.STORE_SET[2], addresses.length);
        addresses.forEach(function(address, index) {
            saveByIndex(address, index);
        });
        return addresses;
    }

    loadAddresses(callback) {
        const that = this;
        if (this.dataLoaded()) {
            logger.log('Using data from localstore');
            callback(localStorage.getItem(this.STORE_SET[2]));
        } else {
            logger.log('Loading data');
            fetch('/all-data')
                .then((data) => data.json())
                .then((data) => {
                    if (data.error) {
                        alert(JSON.stringify(data.error, null, 4));
                        callback(0);
                        return;
                    }
                    logger.log('ALL-DATA: ' + JSON.stringify(data.allData, null, 4));
                    that.setLocalStorage(data.allData);
                    callback(data.allData.length);
                }).catch(function(err) {
                if (err.message) {
                    alert(JSON.stringify(err.message, null, 4));
                } else {
                    alert('error' + err);
                }
                logger.log(err);
            });
        }
    }

    static clear() {
        clearLocalStorage();
    }

    static findByIndex(index) {
        return getByIndex(index);
    }
}
