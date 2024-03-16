var debug = false;
var config = {
    damga_vergisi: 0.00759,
    gelir_vergisi: 0.2,
    issizlik_sigortasi_isci_payi: 0.01,
    issizlik_sigortasi_isveren_payi: 0.02,
    kdv_indirimi: 0.08,
    muaf_yemek_bedeli: "36.72",
    sgk_primi_isci_payi: 0.14,
    sgk_primi_isveren_payi: 0.205
};

function calculate() {
    var calculator = "#calculator";
    const formatter = new Intl.NumberFormat('tr-TR', {
        currency: 'TRY',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    let calisan_sayisi = $(calculator).find("#personCount").val();
    let tutar = $(calculator).find("#personAmount").val().replace(",",".");

    let kdv_indirimi = this.config.kdv_indirimi; //b8
    let gelir_vergisi = this.config.gelir_vergisi; //b9
    let damga_vergisi = this.config.damga_vergisi; //b10
    let sgk_primi_isci_payi = this.config.sgk_primi_isci_payi; //b11
    let issizlik_sigortasi_isci_payi = this.config.issizlik_sigortasi_isci_payi; //b12
    let sgk_primi_isveren_payi = this.config.sgk_primi_isveren_payi; //b13
    let issizlik_sigortasi_isveren_payi = this.config.issizlik_sigortasi_isveren_payi; //b14

    if (this.debug)
        console.log([kdv_indirimi, gelir_vergisi, damga_vergisi, sgk_primi_isci_payi, issizlik_sigortasi_isci_payi, sgk_primi_isveren_payi, issizlik_sigortasi_isveren_payi]);

    let brutlestirme_katsayisi = (1 - sgk_primi_isci_payi - issizlik_sigortasi_isci_payi) * (1 - gelir_vergisi) - damga_vergisi; //b19 =(1-B11-B12)*(1-B9)-B10

    let n_hak_hakedis = tutar;
    let m_hak_hakedis = tutar;

    let n_ssk_primi_isci_payi = 0;
    let m_ssk_primi_isci_payi = m_hak_hakedis * sgk_primi_isci_payi / brutlestirme_katsayisi;

    let n_gelir_vergisi = n_hak_hakedis / (1 - damga_vergisi - gelir_vergisi) * gelir_vergisi;
    let m_gelir_vergisi = m_hak_hakedis * (0.2 * 0.85) / brutlestirme_katsayisi;

    let n_damga_vergisi = n_hak_hakedis / (1 - damga_vergisi - gelir_vergisi) * damga_vergisi;
    let m_damga_vergisi = m_hak_hakedis * (damga_vergisi) / brutlestirme_katsayisi;

    let n_aylik_brut_hakedis = +n_hak_hakedis + +n_ssk_primi_isci_payi + +n_gelir_vergisi + +n_damga_vergisi;
    let m_aylik_brut_hakedis = +m_hak_hakedis + +m_ssk_primi_isci_payi + +m_gelir_vergisi + +m_damga_vergisi;

    let n_ssk_primi_isveren_payi = 0;
    let m_ssk_primi_isveren_payi = m_hak_hakedis * 0.175 / brutlestirme_katsayisi;

    let n_isveren_maliyeti = n_aylik_brut_hakedis;
    let m_isveren_maliyeti = m_aylik_brut_hakedis + m_ssk_primi_isveren_payi;

    let n_toplam_isveren_maliyeti = n_isveren_maliyeti * calisan_sayisi;
    let m_toplam_isveren_maliyeti = m_isveren_maliyeti * calisan_sayisi;

    let total = m_toplam_isveren_maliyeti - n_toplam_isveren_maliyeti;
    let percent = parseFloat((total / n_toplam_isveren_maliyeti) * 100).toFixed(2);

    //$(calculator).find("#calculator>div:last-child div:last-child div:last-child").text(formatter.format(total) + ' TL' + (isNaN(percent) ? '' : ` (%${percent})`));
    $(calculator).find("#yelken_hakedis").text(formatter.format(n_hak_hakedis) + " TL");
    $(calculator).find("#nakit_hakedis").text(formatter.format(m_hak_hakedis) + " TL");

    $(calculator).find("#yelken_sgk").text(formatter.format(n_ssk_primi_isci_payi) + " TL");
    $(calculator).find("#nakit_sgk").text(formatter.format(m_ssk_primi_isci_payi) + " TL");

    $(calculator).find("#yelken_gelirv").text(formatter.format(n_gelir_vergisi) + " TL");
    $(calculator).find("#nakit_gelirv").text(formatter.format(m_gelir_vergisi) + " TL");

    $(calculator).find("#yelken_damgav").text(formatter.format(n_damga_vergisi) + " TL");
    $(calculator).find("#nakit_damgav").text(formatter.format(m_damga_vergisi) + " TL");

    $(calculator).find("#yelken_bruth").text(formatter.format(n_aylik_brut_hakedis) + " TL");
    $(calculator).find("#nakit_bruth").text(formatter.format(m_aylik_brut_hakedis) + " TL");

    $(calculator).find("#yelken_sgkisveren").text(formatter.format(n_ssk_primi_isveren_payi) + " TL");
    $(calculator).find("#nakit_sgkisveren").text(formatter.format(m_ssk_primi_isveren_payi) + " TL");

    $(calculator).find("#yelken_isverenm").text(formatter.format(n_isveren_maliyeti) + " TL");
    $(calculator).find("#nakit_isverenm").text(formatter.format(m_isveren_maliyeti) + " TL");

    $(calculator).find("#yelken_isverent").text(formatter.format(n_toplam_isveren_maliyeti) + " TL");
    $(calculator).find("#nakit_isverent").text(formatter.format(m_toplam_isveren_maliyeti) + " TL");
    $(calculator).find("#yelken_yuzde").text("%" + formatter.format(percent));
    $(calculator).find("#yelken_toplamavantaj").text(formatter.format(total) + " TL");
    if (this.debug)
        console.log(JSON.stringify({
            "calisan_sayisi": calisan_sayisi,
            "tutar": tutar,
            "brutlestirme_katsayisi": brutlestirme_katsayisi,
            "n_hak_hakedis": n_hak_hakedis,
            "m_hak_hakedis": m_hak_hakedis,
            "n_ssk_primi_isci_payi": n_ssk_primi_isci_payi,
            "m_ssk_primi_isci_payi": m_ssk_primi_isci_payi,
            "n_gelir_vergisi": n_gelir_vergisi,
            "m_gelir_vergisi": m_gelir_vergisi,
            "n_damga_vergisi": n_damga_vergisi,
            "m_damga_vergisi": m_damga_vergisi,
            "n_aylik_brut_hakedis": n_aylik_brut_hakedis,
            "m_aylik_brut_hakedis": m_aylik_brut_hakedis,
            "n_ssk_primi_isveren_payi": n_ssk_primi_isveren_payi,
            "m_ssk_primi_isveren_payi": m_ssk_primi_isveren_payi,
            "n_isveren_maliyeti": n_isveren_maliyeti,
            "m_isveren_maliyeti": m_isveren_maliyeti,
            "n_toplam_isveren_maliyeti": n_toplam_isveren_maliyeti,
            "m_toplam_isveren_maliyeti": m_toplam_isveren_maliyeti,
            "total": total,
            "percent": percent,
        }, null, 4));
};

function TabloGoster() {
    $("#calculator-table").slideDown();
    calculate();
}

(function ($) {
    'use strict';
        

    // ==== Sticky Header
    function stickyHeader() {
        const scroll_top = $(window).scrollTop(),
            siteHeader = $('.template-header');

        if (siteHeader.hasClass('sticky-header')) {
            if (scroll_top < 110) {
                siteHeader.removeClass('sticky-on');
            } else {
                siteHeader.addClass('sticky-on');
            }
        }
    }

    // ==== Preloader
    function preloader() {
        $('#preloader').delay(500).fadeOut(500);
    }
    

    /*---------------------
    === Document Ready  ===
    ----------------------*/
    $(document).ready(function () {
        $("#personCount").on("input", function () {
            calculate();
        });
        $("#personAmount").on("input", function () {
            calculate();
        });

        $('a.scrollLink').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 'slow');
            event.preventDefault();
        });
        $("#phoneNumber").inputmask("(999) 999 99 99");
        $("#emailAdress").inputmask({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
            greedy: false,
            onBeforePaste: function (pastedValue, opts) {
                pastedValue = pastedValue.toLowerCase();
                return pastedValue.replace("mailto:", "");
            },
            definitions: {
                '*': {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                    casing: "lower"
                }
            }
        });
        $("#formBilgi").submit(function (event) {
            event.preventDefault();
            var formData = {
                telefon: $("#phoneNumber").val(),
                eposta: $("#emailAdress").val()
            };
            $("#formBilgi button[type=submit]").addClass("disabled").html("<i class='fa fa-spin fa-spinner'></i>");
            $.ajax({
                type: "POST",
                url: "MailSend.ashx",
                data: formData,
                contentType: "application/x-www-form-urlencoded",
                dataType:"html",
                success: function (msg) {
                    var dataJson = JSON.parse(msg);
                    if (dataJson.Result) {
                        alert(dataJson.Message)
                        $("#phoneNumber").val("");
                        $("#emailAdress").val("");
                    }
                    else
                        alert(dataJson.Message);

                    $("#formBilgi button[type=submit]").removeClass("disabled").html("Bilgi İste <i class='fas fa-paper-plane'></i>");
                }
            });
        });
    });

    /*---------------------
    === Window Scroll  ===
    ----------------------*/
    $(window).on('scroll', function () {
        stickyHeader();
    });

    /*------------------
    === Window Load  ===
    --------------------*/
    $(window).on('load', function () {
        preloader();

        // wow Init
        new WOW().init();
    });

})(jQuery);