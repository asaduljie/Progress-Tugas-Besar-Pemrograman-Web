
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.side-menu a').forEach(function(a){
    a.addEventListener('click', function(){
      document.querySelectorAll('.side-menu a').forEach(function(x){ x.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  var filterForm = document.getElementById('filterForm');
  if(filterForm){
    filterForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Filter submitted (static demo).');
    });
  }
});
