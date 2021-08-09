import React from 'react';

const Profile = () => {
    return (
        <main className='content'>
            <div>
                <img id='bg' src='https://images.sharefaith.com/images/3/1562689543776_18/1562689543776_182.jpg' alt='bg' />
            </div>
            <div>
                <img id='ava' src='https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg' alt='avatar'/>
            </div>
            <div>My Posts
                <div>New Post</div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </main>
    );
}

export default Profile;