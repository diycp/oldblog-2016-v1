<!-- content_list.vue -->
<template>
	<div class="row">
        <div class="col-md-12">
          <!-- The time line -->
          <ul class="timeline">
            <template v-for="(item,index) in items">
              <!-- timeline time label -->
              <li v-if="ifTime(item,index,items)" class="time-label">
                    <span class="bg-green">
                      {{item.time}}
                    </span>
              </li>
              <!-- /.timeline-label -->
              <!-- timeline item -->
              <li>
                <i class="fa fa-book bg-blue"></i>

                <div class="timeline-item">
                  <span class="time"><i class="fa fa-clock-o"></i> {{item.time}}</span>

                  <h3 class="timeline-header">
                    <router-link :to="{name:'article',params:{fileName:item.fileName} }">
                      {{item.text}}
                    </router-link>
                  </h3>

                  <div v-if="item.dec" class="timeline-body">
                    {{item.dec}}
                  </div>
                  <div class="timeline-footer" v-if="item.labels">
                    <i class="fa fa-tag text-aqua"></i>
                    <small class="label bg-navy" style="margin:4px" v-for="i in item.labels">{{i.text}}</small>
                  </div>
                </div>
              </li>
              <!-- END timeline item -->
            </template>
            
            <li>
              <i class="fa fa-clock-o bg-gray"></i>
            </li>
          </ul>
        </div>
        <!-- /.col -->
      </div>
</template>
<script>
export default {
  name: 'content_list',
  data(){
  	return {
  		
  	}
  },
  props: ['items'],
  // 放到模板中，然后每个页面用这套
  methods:{
    ifTime(item,index,items){
      if(index>0){
        if(item.time==items[index-1].time){
          return false;
        }
      }
      return true
    }
  }
}
</script>