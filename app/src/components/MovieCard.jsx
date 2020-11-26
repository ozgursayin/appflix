import React from "react";

function MovieCard() {
  return (
    <>
      <div class="container">
        <h3 class="title">Text fadeIn top</h3>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img
              class="content-image"
              src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=359e8e12304ffa04a38627a157fc3362"
              alt=""
            />
            <div class="content-details fadeIn-top">
              <h3>This is a title</h3>
              <p>
                This is a short description. This is a short description. This
                is a short description. This is a short description.
              </p>
              <div class="like-button tooltip">
                ❤<span class="tooltiptext">Like</span>
              </div>
              <div class="tooltip add-button ">
                +<span class="tooltiptext">Add to Watch List</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
