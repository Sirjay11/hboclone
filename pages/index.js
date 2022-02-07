import Head from 'next/head';



export default function Home() {
  return (
    <div>
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo" />
          <span className="login-user__title">Who Is Watching?</span>
        </div>

        <div className="login-user__form">
          <div className="login-user__user-box">
            <img
              className="login-user__user-img"
              src="https://images.generated.photos/lk2lz33KJK5YwL47MbCBNSeWx2sFpkdxV7OXZNook7g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjY4NTAyLmpwZw.jpg"
              alt=""
              width="150px" height="150px" 
            />
            <div className="login-user__user-name">Louise</div>
          </div>
        </div>
        <div className="login-user__buttons">
          <button className="login-user__adult">Add Adult</button>
          <button className="login-user__kid">Add Kid</button>
        </div>
      </div>
    </div>
  );
}
