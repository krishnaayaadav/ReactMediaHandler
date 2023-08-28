
export default function VideoItem(props){
   const videos = props.video;
   const creator = videos.creator;
   const user    = creator.user;
   const url = videos.videofile;
   return(
      <>
          
         <div class="yt-card">
               <video controls width="100%"> 
                  <source src={url} type="video/mp4" ></source>
               </video>

            <div class="details">
               <div class="channel">
                  <a href="https://www.youtube.com/channel/UCD7RHHe-SuFiTWEsC0S1dLg" target="_blank">
                     <img src={creator.profile_img} />
                  </a>
               </div>
               <div class="info">
                  <div class="title"><a href="https://www.youtube.com/watch?v=U-XdJuE79Jw&t=4s" target="_blank">{videos.title} </a>
                  </div>
                  <div class="channel-name"><a href="https://www.youtube.com/channel/UCD7RHHe-SuFiTWEsC0S1dLg" target="_blank">{user.first_name} {user.last_name} </a></div>
                  <div class="views">
               <span id="views">Category: {videos.category} At: </span> 
               <span>{videos.created}</span>
               </div>
               </div>
            </div>
         </div>
      </>
   )
};

