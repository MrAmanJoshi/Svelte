<script>

  import Reference from "./Reference.svelte";

</script>
<main>
    <h1>This is what we have learnt so far...</h1>
   <div class='outterDiv'>
    <div class="icons">
        <div class="iconText">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18749 4.51125V3.75C6.18749 3.00408 6.48381 2.28871 7.01125 1.76126C7.5387 1.23382 8.25407 0.9375 8.99999 0.9375C9.74591 0.9375 10.4613 1.23382 10.9887 1.76126C11.5162 2.28871 11.8125 3.00408 11.8125 3.75V4.51125C12.7777 4.5405 13.3687 4.644 13.8195 5.01825C14.4442 5.53725 14.6092 6.41475 14.9385 8.1705L15.501 11.1705C15.9637 13.6395 16.1947 14.874 15.5205 15.687C14.8455 16.5 13.5892 16.5 11.0775 16.5H6.92249C4.40999 16.5 3.15449 16.5 2.47949 15.687C1.80449 14.874 2.03699 13.6395 2.49899 11.1705L3.06149 8.1705C3.39149 6.4155 3.55574 5.53725 4.18049 5.01825C4.63124 4.644 5.22224 4.5405 6.18749 4.51125ZM7.31249 3.75C7.31249 3.30245 7.49028 2.87322 7.80675 2.55676C8.12322 2.24029 8.55244 2.0625 8.99999 2.0625C9.44754 2.0625 9.87677 2.24029 10.1932 2.55676C10.5097 2.87322 10.6875 3.30245 10.6875 3.75V4.5H7.31249V3.75ZM11.6017 8.1855C11.6595 8.23166 11.7076 8.28875 11.7433 8.35352C11.779 8.41828 11.8015 8.48944 11.8097 8.56293C11.8178 8.63642 11.8114 8.7108 11.7908 8.78181C11.7702 8.85281 11.7357 8.91906 11.6895 8.97675L8.68949 12.7267C8.64003 12.7885 8.5781 12.8391 8.50775 12.8753C8.4374 12.9114 8.36021 12.9324 8.28122 12.9367C8.20223 12.941 8.12321 12.9286 8.04934 12.9003C7.97546 12.872 7.90839 12.8285 7.85249 12.7725L6.35249 11.2725C6.25313 11.1659 6.19904 11.0248 6.20161 10.8791C6.20418 10.7334 6.26321 10.5943 6.36627 10.4913C6.46933 10.3882 6.60837 10.3292 6.7541 10.3266C6.89982 10.324 7.04086 10.3781 7.14749 10.4775L8.20349 11.5328L10.8105 8.27325C10.8566 8.21549 10.9137 8.16739 10.9785 8.13171C11.0433 8.09603 11.1144 8.07348 11.1879 8.06533C11.2614 8.05718 11.3358 8.06359 11.4068 8.08422C11.4778 8.10484 11.544 8.13925 11.6017 8.1855Z" fill="#007456"/>
                    </svg> 
                   <h2 >Extracted</h2>
           </div>
           <div class="secnSvg">
           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M5.20834 17.1875C5.20834 13.386 7.34532 10.1129 10.4167 8.64161C11.5285 8.10901 12.7628 7.8125 14.0625 7.8125C18.9525 7.8125 22.9167 12.0098 22.9167 17.1875" stroke="#4579FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.37501 14.5833L5.20834 17.1875L2.08334 13.0208" stroke="#4579FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
    </div>
   </div>
<div>
    
<p >
    Chandrajeet is a software engineer with a solid stint at Urban Ladder (now under Reliance Retail). He's been with them for a while, starting as an intern and moving up the ranks to a Senior Software Development Engineer. He's got a Bachelor's in Computer Science from IIIT, Sricity.
    </p> 
    <p>
    His tech stack is pretty diverse, with proficiency in Ruby, Python, and JavaScript, among others. He's also been recognized with a couple of awards at his workplace, which speaks volumes about his contributions.
</p>
</div>
   </div> 
   
	<Reference/>
    </main>

    <style>
 h1 {
color: #000;
font-family: Inter;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: 24px; 
text-align: center;
	}

    .outterDiv {
border-radius: 7px;
border: 1px solid rgba(0, 0, 0, 0.10);
background: #FFF;
max-width: 622px;
height: 259px;
flex-shrink: 0;
padding: 7px;

    }

h2 {
color: rgba(0, 0, 0, 0.70);
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
margin-left: 8px;
text-align: center;
}

.secnSvg {
border-radius: 6px;
border: 0.5px solid rgba(0, 0, 0, 0.20);
background: #FFF;width: 34px;
height: 34px;
flex-shrink: 0;
display: flex;
justify-content: center;
align-items: center;
margin-right: 5px;
margin-top: 5px;
}

 .iconText{
border-radius: 100px;
background: #CCEDE6;
width: 104px;
height: 32px;
flex-shrink: 0;
display: flex;
justify-content: center;
align-items: center;
margin-left: 10px;
    }

    .icons{
        display: flex;
        justify-content: space-between;
    }

    p {
color: rgba(0, 0, 0, 0.70);
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
width: 534px; 
margin-left: 19px; 
} 




    </style>