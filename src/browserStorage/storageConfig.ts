import { Base64 } from "js-base64";

export enum StorageFieldsEnum {
  LOGGED_IN_AT_TIMESTAMP = "LOGGED_IN_AT_TIMESTAMP",
  LAST_ACTIVITY_AT_TIMESTAMP = "LAST_ACTIVITY_AT_TIMESTAMP",
  CLIENT_IP = "CLIENT_IP",
  USER_ID = "USER_ID",
  CREDENTIALS = "CREDENTIALS",
}
export const StorageFields =  {
  LOGGED_IN_AT_TIMESTAMP :  Base64.encode(StorageFieldsEnum.LOGGED_IN_AT_TIMESTAMP),
  LAST_ACTIVITY_AT_TIMESTAMP :  Base64.encode(StorageFieldsEnum.LAST_ACTIVITY_AT_TIMESTAMP),
  CLIENT_IP :  Base64.encode(StorageFieldsEnum.CLIENT_IP),
  USER_ID :  Base64.encode(StorageFieldsEnum.USER_ID),
  CREDENTIALS: Base64.encode(StorageFieldsEnum.CREDENTIALS),
}

