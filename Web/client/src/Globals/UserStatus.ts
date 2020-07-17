import {getCookie} from './Cookie'

export default async function GetUserBasicData() {
    let userInfo;

    let token = getCookie('user_id');

    let url = "http://localhost:8000/api/home/"
    const pro = fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + token,
        },
    })
        .then(res => res.json())
        .then(data => {
            userInfo = {
                username: data.username,
                email: data.email,
            }
        });

    await pro

    return userInfo
}


