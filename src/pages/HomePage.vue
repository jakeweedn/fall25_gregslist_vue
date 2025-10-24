<script setup>


</script>

<template>
  <main>
    <section class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <!-- TODO have this span router link to your own House Listings Page -->
            <RouterLink :to="{ name: 'House Listings' }" title="Go to the house listings page!">
              <span class="mdi mdi-home"></span>
            </RouterLink>

            <RouterLink :to="{ name: 'Car Listings' }" title="Go to the car listings page!">
              <span class="mdi mdi-car"></span>
            </RouterLink>
            <RouterLink :to="{ name: 'Job Listings' }" title="Go to the job listings page!">
              <span class="mdi mdi-cat"></span>
            </RouterLink>
            <h1 class="display-1">Gregslist</h1>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: unset;
  transition: color 200ms ease-in-out;
}

a:hover {
  color: var(--bs-gregslist-green);
}

.mdi {
  font-size: 12rem;
}

main {

  background-color: pink;
}
</style>
