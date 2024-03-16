var rootName = "/News";
var chart = null;
Vue.filter('formatDate', function (date) {
    if (date) {
        return moment(String(date)).locale('tr').format('DD.MM.YYYY')
    }
});
Vue.filter('formatDateTime', function (date) {
    if (date) {
        return moment(String(date)).locale('tr').format('DD.MM.YYYY HH:mm')
    }
});
var app = new Vue({
    el: '#page-content',
    data: {

        table: null,
        addEditYetkili: null,
        firmaDetail:null,
        listeHata: '',
        search:'',
        loading: true,
        classes: ['primary', 'success', 'info', 'warning', 'danger', 'secondary', 'dark']
    },
    watch: {
    },
    mounted: function () {
        this.GetGenelData();
    },
    methods: {
        GetGenelData: function (forced) {
            var self = this;
            self.table = $("#icerikTable").dataTable({
                processing: true,
                serverSide: true,
                stateSave: true,    
                searching: true,
                searchDelay: 300,
                columns: [
                    { data: 'url' },
                    { data: 'createDate' }
                ],
                order: [[1, "desc"]],
                columnDefs: [{ className: "text-center", "targets": [0, 1] }],
                pageLength: 5,
                aLengthMenu: [
                    [5,10,50, 100, 250, 500, -1],
                    [5,10,50, 100, 250, 500, "Hepsi"]
                ],
                //createdRow: function (row, data, dataIndex) {
                //    $(row).addClass("user-" + data[0]);
                //},
                "drawCallback": function (settings) {
                    //$('[data-toggle="tooltip"], .enable-tooltip').tooltip({ container: 'body', animation: false });
                    self.loading = false;

                    //$(document).on("change", '#icerikTable tbody [type="checkbox"]', function () {
                    //    self.SecilenKontrol();
                    //})
                },
                "fnServerParams": function (aoData) {

                },
                "ajax": {
                    type: "POST",
                    url: rootName + "/GetNews",
                    data: function (d) {
                        console.log(d);
                        var info = $('#icerikTable').DataTable().page.info();
                        const newData = {
                            Draw: d.draw, Page: info.page, Size: d.length, Search: self.search 
                        }
                        return JSON.stringify(newData);
                    },
                    contentType: "application/json; charset=utf-8"
                }
            });
        },
        IndexGuncelle: function () {
            var self = this;
            $.ajax({
                type: "POST", url: rootName + "/UpdateNews",
                data: '',
                contentType: "application/json; charset=utf-8",
                dataType: "html",
                success: function (data) {
                    var res = JSON.parse(data);
                    if (res.Success) {
                        self.ListYenile();
                    }
                    else {
                        self.listeHata = res.Message;
                    }

                    self.loading = false;
                    NProgress.done();
                    setTimeout(function () {
                        app.$forceUpdate();
                    }, 500);
                }
            });
        },
        ListYenile: function () {
            this.loading = true;
            var dtable = $("#icerikTable").dataTable().api();
            dtable.clear().draw(); // Add new data
            dtable.columns.adjust().draw();
        },
    }
});