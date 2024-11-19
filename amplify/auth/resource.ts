import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: 'LINK',
      verificationEmailSubject: 'Welcome to MyMuse!',
      verificationEmailBody: (createLink) => `Please click on ${createLink('this link')} to verify your email.`
    },
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        attributeMapping: {
          email: 'email'
        }
      },
      callbackUrls: [
        'https://mymuseapp.com/profile'
      ],
      logoutUrls: ['https://mymuseapp.com'],
    }
  },
});
