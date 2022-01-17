import Head from 'next/head'


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
              src="https://images.generated.photos/vQA1uTrbOYronPrLTRCwF1pVjXF0ju-bhDvFJYAnMcU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjI3NjQ3LmpwZw.jpg"
            />
            <div className="login-user__user-name">Jane</div>
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
