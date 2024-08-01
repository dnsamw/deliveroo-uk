var CryptoJS = require("crypto-js");

export enum StorageTypes {
  LOCAL,
  SESSION,
}

export const BrowserStorage = {
  addItemToStorage: ({
    key,
    value,
    storageType = StorageTypes.SESSION,
  }: {
    key: string;
    value: string;
    storageType?: StorageTypes;
  }) => {
    const encryptedValue = CryptoJS.AES.encrypt(value, key).toString();

    if (storageType === StorageTypes.LOCAL) {
      localStorage.setItem(key, encryptedValue);
    } else {
      sessionStorage.setItem(key, encryptedValue);
    }
  },

  getItemFromStorage: ({
    key,
    storageType = StorageTypes.SESSION,
  }: {
    key: string;
    storageType?: StorageTypes;
  }) => {
    if (storageType === StorageTypes.LOCAL) {
      return localStorage.getItem(key) || null;
    } else {
      return sessionStorage.getItem(key) || null;
    }
  },

  getEncryptedItemFromStorage: ({
    key,
    storageType = StorageTypes.SESSION,
  }: {
    key: string;
    storageType?: StorageTypes;
  }) => {
    let encryptedValue;
    if (storageType === StorageTypes.LOCAL) {
      encryptedValue = localStorage.getItem(key);
    } else {
      encryptedValue = sessionStorage.getItem(key);
    }

    if (encryptedValue) {
      const bytes = CryptoJS.AES.decrypt(encryptedValue, key);
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
      return originalText;
    }
    return null;
  },

  removeItemFromStorage: ({
    key,
    storageType = StorageTypes.SESSION,
  }: {
    key: string;
    storageType?: StorageTypes;
  }) => {
    if (storageType === StorageTypes.LOCAL) {
      localStorage.removeItem(key);
    } else {
      sessionStorage.removeItem(key);
    }
  },


  clearAllFromStorage: ({
    storageType = StorageTypes.SESSION,
  }: {
    storageType?: StorageTypes;
  }) => {
    // if (storageType === StorageTypes.LOCAL) {
      localStorage.clear();
    // } else {
      sessionStorage.clear();
    // }
  },
};
    