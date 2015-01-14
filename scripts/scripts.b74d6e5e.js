"use strict";angular.module("dssApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("dssApp").controller("MainCtrl",["$scope","$modal","$log","decisionGraph",function(a,b,c,d){a.defaultDecisionGraph=d.getDefaultGraph(),a.decisionGraph={},a.currentNode={},a.makeDecision=function(b){if("number"!=typeof b)throw TypeError();a.currentNode.decisions&&(a.currentNode=a.currentNode.decisions[b])},a.reset=function(){a.currentNode=angular.copy(a.decisionGraph)},a.useDefaultDecisionGraph=function(){a.decisionGraph=angular.copy(a.defaultDecisionGraph)},a.openCustomDecisionGraphInput=function(){var c=b.open({controller:"CustomDecisionGraphModalCtrl",templateUrl:"views/customdecisiongraphmodal.html",size:"lg",resolve:{decisionGraph:function(){return angular.toJson(a.decisionGraph)}}});c.result.then(function(b){a.decisionGraph=b},function(){})},a.useDefaultDecisionGraph(),a.reset()}]),angular.module("dssApp").controller("CustomDecisionGraphModalCtrl",["$scope","$modalInstance","decisionGraph",function(a,b,c){a.decisionGraph=c,a.ok=function(){b.close(angular.fromJson(a.decisionGraph))},a.cancel=function(){b.dismiss({})}}]),angular.module("dssApp").factory("decisionGraph",function(){var a={topic:"Wybierz grę?",question:"Wiek graczy",decisions:[{label:"do 7 lat",question:"Liczba graczy",decisions:[{label:"0 - 2",question:"Typ gry",decisions:[{label:"Karciana",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"blef"},{label:"średnia",answer:"wojna"},{label:"trudna",answer:"makao"}]},{label:"Planszowa",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"pędzące żółwie"},{label:"średnia",answer:"pasjans"},{label:"trudna",answer:"warcaby"}]},{label:"Inna",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"kolory"},{label:"średnia",answer:"statki"},{label:"trudna",answer:"twister"}]}]},{label:"2 - 4",question:"Typ gry",decisions:[{label:"Karciana",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"piotruś"},{label:"średnia",answer:"wojna"},{label:"trudna",answer:"makao"}]},{label:"Planszowa",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"wilki i owce"},{label:"średnia",answer:"mieszkańcy świata"},{label:"trudna",answer:"był sobie człowiek"}]},{label:"Inna",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"berek"},{label:"średnia",answer:"chowanego"},{label:"trudna",answer:"wyzwania"}]}]},{label:"4+",question:"Typ gry",decisions:[{label:"Karciana",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"piotruś"},{label:"średnia",answer:"wojna"},{label:"trudna",answer:"makao"}]},{label:"Planszowa",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"fauna"},{label:"średnia",answer:"dżungla"},{label:"trudna",answer:"monopoly"}]},{label:"Inna",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"berek"},{label:"średnia",answer:"chowanego"},{label:"trudna",answer:"wyzwania"}]}]}]},{label:"od 7 do 18 lat",question:"Liczba graczy",decisions:[{label:"0 - 2",question:"Typ gry",decisions:[{label:"Karciana",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"wojna"},{label:"średnia",answer:"idz na piwo"},{label:"trudna",answer:"Znalazłeś jajo dziubdziuba"}]},{label:"Planszowa",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"sttki"},{label:"średnia",answer:"warcaby"},{label:"trudna",answer:"szachy"}]},{label:"Inna",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"bierki"},{label:"średnia",answer:"jenga"},{label:"trudna",answer:"rzutki"}]}]},{label:"2 - 4",question:"Typ gry",decisions:[{label:"Karciana",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"makao"},{label:"średnia",answer:"tysiąc"},{label:"trudna",answer:"poker"}]},{label:"Planszowa",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"cytadela"},{label:"średnia",answer:"chińczyk"},{label:"trudna",answer:"gra o tron"}]},{label:"Inna",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"jenga"},{label:"średnia",answer:"rzutki"},{label:"trudna",answer:"singStar"}]}]},{label:"4+",question:"Typ gry",decisions:[{label:"Karciana",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"makao"},{label:"średnia",answer:"tysiąc"},{label:"trudna",answer:"remik"}]},{label:"Planszowa",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"monopoly"},{label:"średnia",answer:"chińczyk"},{label:"trudna",answer:"PixelTactics"}]},{label:"Inna",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"jenga"},{label:"średnia",answer:"rzutki"},{label:"trudna",answer:"SingStar"}]}]}]},{label:"od 18 lat w górę",question:"Liczba graczy",decisions:[{label:"0 - 2",question:"Typ gry",decisions:[{label:"Karciana",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"Triple Town -  a tak serio idź na piwo"},{label:"średnia",answer:"lepiej z kimś porozmawiaj"},{label:"trudna",answer:"poszukaj większego towarzystwa"}]},{label:"Planszowa",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"statki"},{label:"średnia",answer:"warcaby"},{label:"trudna",answer:"szachy"}]},{label:"Inna",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"bierki"},{label:"średnia",answer:"jenga"},{label:"trudna",answer:"bilard"}]}]},{label:"2 - 4",question:"Typ gry",decisions:[{label:"Karciana",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"tysiąc"},{label:"średnia",answer:"texas holden"},{label:"trudna",answer:"brydż"}]},{label:"Planszowa",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"chińczyk"},{label:"średnia",answer:"gra o tron"},{label:"trudna",answer:"Caylus"}]},{label:"Inna",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"jenga"},{label:"średnia",answer:"państwa miasta"},{label:"trudna",answer:"scrable"}]}]},{label:"4+",question:"Typ gry",decisions:[{label:"Karciana",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"makao"},{label:"średnia",answer:"remik"},{label:"trudna",answer:"3-5-8"}]},{label:"Planszowa",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"blefmonopoly"},{label:"średnia",answer:"świat dysku"},{label:"trudna",answer:"Pixel Tactics"}]},{label:"Inna",question:"Poziom trudości",decisions:[{label:"łatwa",answer:"jenga"},{label:"średnia",answer:"rzutki"},{label:"trudna",answer:"Sing Star"}]}]}]}]};return{getDefaultGraph:function(){return a},someMethod:function(){return meaningOfLife}}});