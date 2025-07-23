// // // import files
// // import { ourTeam } from "../constant"

// // const Teams = () => {
// //   return (
// //     <div className="py-12">

// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-8  w-full px-16">
// //         {ourTeam.map((team) => (
// //           <div key={team.id}>
// //             <img src={`img/${team.img}`} alt="team pics" loading="lazy" />
// //             <div className="text-center font-semibold mt-4">
// //               <p>{team.name}</p>
// //               <p>{team.tag}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //     </div>
// //   );
// // };

// // export default Teams

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActions from '@mui/material/CardActions';

// // Assuming ourTeam is imported and each team member has: id, img (image path), name, and tag (description)
// import { ourTeam } from '../constant';

// const Teams = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 p-14">
//       {ourTeam.map((team) => (
//         <Card key={team.id} sx={{ maxWidth: 300 }}>
//           <CardMedia
//             component="img"
//             height="50"
//             image={`img/${team.img}`}  // adapt the path according to your setup
//             alt={team.name}
//             loading="lazy"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {team.name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {team.tag}
//             </Typography>
//           </CardContent>
//                 <CardActions>
//         <Button size="small">Give a feedback</Button>
//         <Button size="small">Show feedbacks</Button>
//       </CardActions>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Teams;


import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from 'react-router-dom';


import { ourTeam } from "../constant";

const Teams = () => {
    const navigate = useNavigate();
  // Track which card has feedback popup open (store the team id or null)
  const [openFeedbackId, setOpenFeedbackId] = React.useState(null);
  // Input value of feedback for currently open card
  const [feedbackText, setFeedbackText] = React.useState("");

  const openFeedback = (id) => {
    setOpenFeedbackId(id);
    setFeedbackText(""); // reset textarea on open
  };

  const closeFeedback = () => {
    setOpenFeedbackId(null);
    setFeedbackText("");
  };

  const submitFeedback = () => {
    console.log(
      `Feedback for ID ${openFeedbackId}: ${feedbackText}`
    ); // HANDLE THE FEEDBACK SUBMISSION HERE
    alert("Feedback submitted!"); // Simple alert for demo
    closeFeedback();
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 p-14">
        {ourTeam.map((team) => (
          <Card key={team.id} sx={{ maxWidth: 300, position: "relative" }}>
            <CardMedia
              component="img"
              height="140" // increased height for better image visibility
              image={`img/${team.img}`} // adapt this path as needed
              alt={team.name}
              loading="lazy"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {team.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {team.tag}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => openFeedback(team.id)}>
                Give a feedback
              </Button>
              <Button size="small" onClick={() => navigate('/feedbacks')}>Show feedbacks</Button>
            </CardActions>

            {/* Feedback popup/modal */}
            {openFeedbackId === team.id && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
                onClick={closeFeedback} // Clicking outside closes the popup
              >
                <div
                  className="bg-white rounded-lg p-6 max-w-md w-full"
                  onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing
                >
                  <h2 className="text-xl font-semibold mb-4">
                    Write your feedback for {team.name}
                  </h2>

                  <textarea
                    className="w-full border border-gray-300 rounded p-2 mb-4"
                    rows={4}
                    placeholder="Type your comment here..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                  />

                  <div className="flex justify-end gap-4">
                    <Button variant="outlined" onClick={closeFeedback}>
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={submitFeedback}
                      disabled={!feedbackText.trim()}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Teams;
