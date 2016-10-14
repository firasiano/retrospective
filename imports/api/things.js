import { Mongo } from 'meteor/mongo';
 
export const Goods = new Mongo.Collection('goods');
export const Bads = new Mongo.Collection('bads');