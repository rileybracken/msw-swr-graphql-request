import getConfig from 'next/config';
import { request as graphqlRequest } from 'graphql-request';

import { isSSR } from './isSSR';

const { publicRuntimeConfig } = getConfig();
const baseUrl = publicRuntimeConfig.baseUrl;

export const request = ({ url, ...rest }: any) => {
  return graphqlRequest({
    ...rest,
    url: isSSR ? `${baseUrl}${url}` : url,
  });
};
