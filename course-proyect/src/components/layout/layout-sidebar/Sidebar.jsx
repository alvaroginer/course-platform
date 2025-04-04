import "../../../App.css";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div class="display__flex">
      <aside class="sidebar">
        <div class="sidebar--top tag">
          <div class="tag--image bg-color__white">
            <img src="" alt="" />
          </div>
          <div class="tag--text-container">
            <p class="text-container__text">
              <strong>GRC Solutions</strong> <br />
              Training Portal
            </p>
          </div>
          <div class="tag--icon">
            <img src="../imgs/🔹Icon-Color.png" alt="" />
          </div>
        </div>
        <nav class="sidebar--main">hola</nav>
        <div class="sidebar--footer tag">adiós</div>
      </aside>
    </div>
  );
};
