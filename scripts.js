($(document).ready(function() {


    $("div[id^='original']").each(function() {

        var currentModal = $(this);

        //click next
        currentModal.find('.btn-next').click(function() {
            var nextModal = currentModal.closest("div[id^='original']").nextAll("div[id^='original']").first();
            currentModal.on('hidden.bs.modal', function() {
                nextModal.modal("show")
            })
            currentModal.modal('hide');
        });

        //click prev
        currentModal.find('.btn-prev').click(function() {
            var prevModal = currentModal.closest("div[id^='original']").prevAll("div[id^='original']").first()
            currentModal.on('hidden.bs.modal', function() {
                prevModal.modal("show")
            })
            currentModal.modal('hide');
        });

    });

}));