import React from 'react';
import axios from 'axios';
import httpClient from './server'
const apiClient=new httpClient().axios
export default apiClient
