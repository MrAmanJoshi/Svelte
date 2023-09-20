<script>
  import Eupho from "./Eupho.svelte";
 
</script>

<main>
	<Eupho/>
	
</main>

<style>
	 main{
		display: flex;
		direction: column;
		justify-content: center;
		align-items: center;
		padding: 1px;
	 }
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>