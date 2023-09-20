<script>
let selectedValue = 'Supply a reference data source';
const data = [ 'Upload job description','Share a public URL', 'Manually paste the job description', 'Supply a reference data source'];
$: { 
    console.log('You selected', selectedValue); 
}
</script>
<main>

    <div class="selectDiv">
        <p>And to hyper-personalise the journey, you would..</p>
       <select  bind:value={selectedValue} >
        {#each data as item (item)}
             <option value={item} >{item}</option>
        {/each} 
       </select>
       </div>
    
</main>

<style>
    .selectDiv{
    margin-top: 29px;
    display: flex;
    justify-content: space-between;
    max-width: 622px;
}

p{
color: rgba(0, 0, 0, 0.70);
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
}

select{
max-width: 251px;
height: 44px;
flex-shrink: 0;
border-radius: 7px;
border: 1px solid #4579FF;
background: rgba(69, 121, 255, 0.05);
box-shadow: 3px 5px 8px 0px rgba(69, 121, 255, 0.21);
font-size: 14px;
}
</style>