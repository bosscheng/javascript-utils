/**
 * 主要收集 浏览器的DOM 的工具方法
 * Author: bosscheng
 * Data: 14-12-4
 */

var org = org ||{};
var org.util = org.util || {};

;(function(util){
   /*
    内部方法 遍历整个DOM节点
   */
   var walkTheDom = function walk(node,func){
      func(node);
      node = node.firstChild;
      
      while(node){
        walk(node,func);
        node = node.nextSibling;
      }
   }

    /*
    get elements by attribute
    
    @param attr 属性 类似于  class
    @param value 值 test-node
    
    查询的是class="test-node"的节点。
    */   
   util.getElementsByAttribute = function(att,value){
      var results = [];
      
      valkTheDom(document.body,function(node){
        var actual = node.nodeType === 1 && node.getAttribute(attr);
        if(typeof actual === "string" && (actual === value || typeof value !== "string")){
            results.push(node);
        }
      });
      return results;
   }
   /*
   
   @desc 
      创建一个iframe对象。
   @param {String} frameName
   @param {String} src
   */
   util.createIframe = function(frameName,src){
      if(src === null){
         src = "javascript:;";
      }
      removeIframe(frameName);
      
      var frame = document.createElement("iframe");
      franme.height = 0;
      frame.width = 0;
      frame.style && frame.style.display = "none";
      frame.name = frameName;
      frame.id = frameName; 
      frame.src = src;
      document.body && document.body.appendChild(frame);
      window.frames[frameName].name = frameName;
      return frame;
   }
   
   /*
   @param {String} frameName
   */
   var removeIframe = util.removeIframe = function(frameName){
      var iframe = document.getElementById(frameName);
      if(iframe){
         document && document.body && document.body.removeChild(iframe);
      }
   }
   /*
   @desc 
      移除一个node节点
   @param {string} 
   
   */
   var removeNode = util.removeNode = function(nodeId){
      try{
         if(typeof nodeId === "string"){
            var node = document.getElementById(nodeId);
            if(node && node.parentNode){
               node.parentNode.removeChile(nodeId);
            }
         }
      }
      catch(e){
         
      }
   }
   
   
   
   
})(org.util);
