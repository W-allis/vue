<template>
  <div>
    <input [(model)]= 'myName'/>
      <h2>{{myName}}</h2>    
  </div> 
</template>

<script>
import Rx from 'rxjs/Rx'

export default {
  name: 'mydetails',
  data: function() {
    return {
      myName: 'shi'
    }
  },
  created() {
    Rx.Observable.from([1, 2, 3]).subscribe(res => {
      console.log(res)
    })
  }
}
</script>

<style>
    
</style>    