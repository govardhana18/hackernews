import axios from 'axios';
import * as constants from '../constants';

export const getStoryIds = async () => {
    const result = await axios.get(constants.NEW_STORIES_URL);    
    return result.data;
}

export const getStory = async (story_id) => {
    const result = await axios
      .get(`${constants.STORY_URL + story_id}.json`);
      return result.data;
}

export const getComment = async (kid_id) => {
    const result = await axios
      .get(`${constants.STORY_URL + kid_id}.json`);
      return result.data;
}