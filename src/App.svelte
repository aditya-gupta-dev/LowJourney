<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import Home from './routes/Home.svelte';
  import History from './routes/History.svelte';
</script>

<Router>
  <Route path="/" component={Home}/>
  <Route path="history" component={History}/>
</Router>
