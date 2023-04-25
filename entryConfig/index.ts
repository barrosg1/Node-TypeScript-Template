import "dotenv/config";
import config from "config";

export const get = (key: any) => process.env[key] || config.get(key);
