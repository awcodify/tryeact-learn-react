import { getUrl, get } from './base.service'

export const getAllPosts = () => {
    const url = getUrl('/posts?number=10');
    return get(url)
}