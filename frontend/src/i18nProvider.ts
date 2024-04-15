//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    Users: {
      name: 'Users',
      fields: {
        username: 'Username',
        email: 'Email',
        password: 'Password',
        height: 'Height',
        town: 'Town',
        province: 'Province',
        maritalStatus: 'Marital Status',
        dateOfBirth: 'Date Of Birth',
        highestEducation: 'Highest Education',
        haveKids: 'Have Kids',
        lookingFor: 'Looking For',
        id: 'id',
      },
    },
    Photos: {
      name: 'Photos',
      fields: {
        photoUrl: 'Photo Url',
        userId: 'User Id',
        uploadDate: 'Upload Date',
        id: 'id',
      },
    },
    Chats: {
      name: 'Chats',
      fields: {
        senderId: 'Sender Id',
        receiverId: 'Receiver Id',
        messageContent: 'Message Content',
        timestamp: 'Timestamp',
        id: 'id',
      },
    },
    Likes: {
      name: 'Likes',
      fields: {
        userId: 'User Id',
        targetId: 'Target Id',
        timestamp: 'Timestamp',
        id: 'id',
      },
    },
    VideoChats: {
      name: 'Video Chats',
      fields: {
        callerId: 'Caller Id',
        receiverId: 'Receiver Id',
        startTime: 'Start Time',
        endTime: 'End Time',
        status: 'Status',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Users: {
      name: 'Users (fr)',
      fields: {
        username: 'Username (fr)',
        email: 'Email (fr)',
        password: 'Password (fr)',
        height: 'Height (fr)',
        town: 'Town (fr)',
        province: 'Province (fr)',
        maritalStatus: 'Marital Status (fr)',
        dateOfBirth: 'Date Of Birth (fr)',
        highestEducation: 'Highest Education (fr)',
        haveKids: 'Have Kids (fr)',
        lookingFor: 'Looking For (fr)',
        id: 'id',
      },
    },
    Photos: {
      name: 'Photos (fr)',
      fields: {
        photoUrl: 'Photo Url (fr)',
        userId: 'User Id (fr)',
        uploadDate: 'Upload Date (fr)',
        id: 'id',
      },
    },
    Chats: {
      name: 'Chats (fr)',
      fields: {
        senderId: 'Sender Id (fr)',
        receiverId: 'Receiver Id (fr)',
        messageContent: 'Message Content (fr)',
        timestamp: 'Timestamp (fr)',
        id: 'id',
      },
    },
    Likes: {
      name: 'Likes (fr)',
      fields: {
        userId: 'User Id (fr)',
        targetId: 'Target Id (fr)',
        timestamp: 'Timestamp (fr)',
        id: 'id',
      },
    },
    VideoChats: {
      name: 'Video Chats (fr)',
      fields: {
        callerId: 'Caller Id (fr)',
        receiverId: 'Receiver Id (fr)',
        startTime: 'Start Time (fr)',
        endTime: 'End Time (fr)',
        status: 'Status (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
