window.lampa_settings.disable_features = window.lampa_settings.disable_features || {};
window.lampa_settings.disable_features.lgbt = Lampa.Storage.get('lgbt_off', false);

Lampa.Storage.set('protocol', 'http');

/*
 *** Взаимное исключение синхронизаций BYLAMPA и CUB
 */

// Функция для управления видимостью параметров
/*function checkSyncConflicts() {
    var byLampaSync = Lampa.Storage.field('acc_sync');
    var cubSync = Lampa.Storage.field('account_use');
    
    // Если включена синхронизация CUB, скрываем оригинальный параметр BYLAMPA и показываем заглушку
    if (cubSync) {
        $('div[data-name="acc_sync"]').hide();
        $('div[data-name="acc_sync_disabled"]').show();
    } else {
        $('div[data-name="acc_sync"]').show();
        $('div[data-name="acc_sync_disabled"]').hide();
    }
    
    // Если включена синхронизация BYLAMPA, скрываем оригинальный параметр CUB и показываем заглушку
    if (byLampaSync) {
        $('div[data-name="account_use"]').hide();
        $('div[data-name="account_use_disabled"]').show();
    } else {
        $('div[data-name="account_use"]').show();
        $('div[data-name="account_use_disabled"]').hide();
    }
}

// Создаем заглушку для BYLAMPA
Lampa.SettingsApi.addParam({
    component: 'acc',
    param: {
        name: 'acc_sync_disabled',
        type: 'trigger',
        default: false
    },
    field: {
        name: 'Синхронизация данных',
        description: 'Синхронизация ваших закладок, плагинов, таймкодов, историй просмотров и поиска между устройствами'
    },
    onRender: function(item) {
        setTimeout(function() {
            $('div[data-name="acc_sync_disabled"]').insertBefore('div[data-name="acc_sync"]');
        }, 0);
    },
    onChange: function(value) {
        // Возвращаем false и обновляем настройки
        Lampa.Storage.set('acc_sync_disabled', false);
        Lampa.Settings.update();
        Lampa.Bell.push({
            text: 'Сначала отключите синхронизацию CUB',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#f44336"/></svg>'
        });
    }
});

// Создаем заглушку для CUB
Lampa.SettingsApi.addParam({
    component: 'account',
    param: {
        name: 'account_use_disabled',
        type: 'trigger',
        default: false
    },
    field: {
        name: 'Синхронизация',
        description: ''
    },
    onRender: function(item) {
        setTimeout(function() {
            $('div[data-name="account_use_disabled"]').insertBefore('div[data-name="account_use"]');
        }, 0);
    },
    onChange: function(value) {
        // Возвращаем false и обновляем настройки
        Lampa.Storage.set('account_use_disabled', false);
        Lampa.Settings.update();
        Lampa.Bell.push({
            text: 'Сначала отключите синхронизацию BYLAMPA',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#f44336"/></svg>'
        });
    }
});

// Запускаем проверку при открытии настроек
Lampa.Settings.listener.follow('open', function(e) {
    setTimeout(function() {
        checkSyncConflicts();
    }, 0);
    
    if (e.name == 'account') {
        setTimeout(function() {
            checkSyncConflicts();
        }, 0);
    }
    
    if (e.name == 'acc') {
        setTimeout(function() {
            checkSyncConflicts();
        }, 0);
    }
});*/

//localStorage.setItem('cub_domain', 'cubleave.store');
//localStorage.removeItem('cub_domain');

Lampa.SettingsApi.addParam({
    component: 'interface',
    param: {
        name: 'lgbt_off',
        type: 'trigger',
        default: false
    },
    field: {
        name: 'Показывать LGBT контент'
    },
    onRender: function(item) {
        setTimeout(function() {
            $('div[data-name="lgbt_off"]').insertAfter('div[data-name="card_interfice_cover"]');
        }, 0);
    },
    onChange: function(value) {
        location.reload();
    }
});
/*Lampa.SettingsApi.addParam({
    component: 'interface',
    param: {
    name: 'voteSelector',
    type: 'select',
    values: {
      0: "КиноПоиск",
      1: "IDMB",
      2: "TMDB"
    },
    default: 2
    },
    field: {
      name: 'Источник рейтинга',
      description: ''
    },
    onRender: function (item) {
      setTimeout(function() {
       // document.querySelector('div[data-name="card_interfice_type"]').before(document.querySelector('div[data-name="voteSelector"]'));
	$('.settings-param > div:contains("Источник рейтинга")').parent().insertAfter($('div[data-name="card_interfice_type"]')); 
      }, 10);
    }
  });*/

     
  Lampa.Lang.add({
          extensions_worked: {
            ru: "Доступен для загрузки"
          },
          title_error: {
            ru: "Недоступен или ошибка в адресе"
          },
	      torrent_parser_no_hash: {
            ru: "Не удалось получить HASH. Перезагрузите свой TorrServer или смените адрес TorrServer!"
	      }
   })

   window.lampa_settings.torrents_use = true;
   window.lampa_settings.demo = false;
   window.lampa_settings.read_only = false;

   Lampa.Utils.putScriptAsync([
	    'https://bylampa.github.io/notice.js?v=' + Math.random(),
	    'https://bylampa.github.io/addon.js?v=' + Math.random(),
	    'https://bylampa.github.io/bylampa_rating.js?v=' + Math.random(),
	    'https://bylampa.github.io/account.js?v=' + Math.random()
   ], function () {});

   var plugArray = Lampa.Storage.get('plugins') || [];
   var delplugin = plugArray.filter(function(obj) {return obj.url !== 'https://bylampa.github.io/account.js'});
   Lampa.Storage.set('plugins', delplugin); 

   var timer = setInterval(function(){
        if(typeof Lampa !== 'undefined'){
            clearInterval(timer);

            if(!Lampa.Storage.get('set','false')) start_set();
		 
        }
    },200);

    function start_set(){
	if (Lampa.Storage.get('language') == 'ru') {
	   var pluginsArray = Lampa.Storage.get('plugins','[]')
	   pluginsArray.push({"author": "@bylampa","url": "https://bylampa.github.io/tmdb-proxy.js","name":"TMDB Proxy","status": 1});
       Lampa.Storage.set('plugins', pluginsArray);
	}
    Lampa.Storage.set('set','true');
    Lampa.Storage.set('protocol', 'http');
    Lampa.Storage.set('keyboard_type', 'integrate');
    Lampa.Storage.set('start_page', 'main');
    Lampa.Storage.set('source', 'tmdb');
    Lampa.Storage.set('background', 'false');
    Lampa.Storage.set('animation', 'false');
    Lampa.Storage.set('mask', 'false'); 
	Lampa.Storage.set('player_normalization', 'true');
    Lampa.Storage.set('player_timecode', 'ask');
    Lampa.Storage.set('screensaver', 'false');
    Lampa.Storage.set('pages_save_total', '3');
	Lampa.Storage.set('device_name', 'Lampa Uncensored');
	//   Lampa.Storage.set('cub_domain', 'standby.cub.red');
	location.reload()
    } 

     Lampa.Storage.listener.follow('change', function (event) {
      if (event.name == 'activity' && Lampa.Activity.active().component === 'bookmarks') {
        setTimeout(function(){
          Lampa.Controller.move('down');
          Lampa.Controller.move('up');
        },50)
      }
     });

$(document).ready(function() {

   var protocolButt = '<div id="secured" class="head__action proto"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="25.6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="var(--ci-primary-color, #ffffff)" d="M400,200H388V144a128,128,0,0,0-256,0v56H120a24.028,24.028,0,0,0-24,24V472a24.028,24.028,0,0,0,24,24H400a24.028,24.028,0,0,0,24-24V224A24.028,24.028,0,0,0,400,200ZM164,144a96,96,0,0,1,192,0v56H164ZM392,464H128V232H392Z" class="ci-primary"></path> <rect width="40" height="40" x="240" y="328" fill="var(--ci-primary-color, #ffffff)" class="ci-primary"></rect> </g></svg>';
   if (window.location.protocol == 'https:') 
	 setTimeout(function(){
	    $('#app > div.head > div > div.head__actions').prepend(protocolButt);
	       Lampa.Bell.push({
                 text: Lampa.Lang.translate('Измените протокол сервера на http')
           });
	  }, 2000)
	
   /* var interval = setInterval(function() {
        $('.navigation-tabs__button').each(function() {
            if ($(this).text().trim() === 'Lampa') {
                $(this).html('BYLAMPA');
            }
        });
    }, 100); */
 
   /* $('.navigation-tabs__button').on('focus', function() {
        if ($(this).text().trim() === 'Lampa') {
            $(this).html('BYLAMPA');
        }
    });*/
});

 var plugins = Lampa.Storage.get('plugins','[]')

    plugins.forEach(function(plug) {
        plug.url = (plug.url + '').replace('http://cub.red/plugin/tmdb-proxy', 'https://bylampa.github.io/tmdb-proxy.js');
        plug.url = (plug.url + '').replace('https://nb557.github.io/plugins/rating.js', 'https://bylampa.github.io/rating.js');
		plug.url = (plug.url + '').replace('https://nb557.github.io/plugins/online_mod.js', 'https://bylampa.github.io/online_mod.js');
    })

    Lampa.Storage.set('plugins',plugins) 

  var backImport = localStorage.getItem('plugins') || [];
  localStorage.setItem('pluginsBack', backImport);

// Получаем все ключи из localStorage
/*for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    
    if (key && key.indexOf('movie_') === 0) {
        // Удаляем элемент из localStorage
        localStorage.removeItem(key);
        i--;
    }
}*/


