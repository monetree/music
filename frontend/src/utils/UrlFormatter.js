import * as constants from 'utils/Constants'

const FormatUrl = (url) => {
    let node_url = constants.URL;
    url = node_url + url;
    return url
}

export default FormatUrl
