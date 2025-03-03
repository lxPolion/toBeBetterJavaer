import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as p,e as r}from"./app-wJXw8B29.js";const a={},n=r('<blockquote><p><a href="https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g" target="_blank" rel="noopener noreferrer">二哥的编程星球</a>已经有 <strong>740 多名</strong> 球友加入了，如果你也需要一个良好的学习氛围，<a href="https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g" target="_blank" rel="noopener noreferrer">戳链接</a>加入我们吧！这是一个Java学习指南+编程实战+LeetCode 刷题的私密圈子，你可以向二哥提问、帮你制定学习计划、和球友一起打卡成长，冲冲冲。</p></blockquote><p>周末就不分享技术了。今天早上在知乎看到一个挺有意思的话题：<strong>不到 20 人的 IT 公司该去吗</strong>？</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-budrditgsgqm-092ccdf7-12ac-4ca0-81b0-0d7fc193ffdc.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>回答区有一位老哥分享了自己在一个20 来人的小公司的奇葩工作经历，分享一下。</p><blockquote><p>原回答地址：https://sourl.cn/hy9TD</p></blockquote><p>下面是正文。</p><p>刚到西安有幸加入了一个 20 来人的 it 公司。</p><p>本来是不想去那种小公司的，为什么加入呢？<strong>原因大概有二</strong>：</p><ul><li>其一就是该公司号称是某互联网大厂旗下的子公司，公司资源共享。</li><li>其二就是感觉经历了四面感觉心好累，不想再面试，就这个吧。</li></ul><h2 id="第一天" tabindex="-1"><a class="header-anchor" href="#第一天"><span>第一天</span></a></h2><p>然鹅，当入职第一天开始我就渐渐发现情形怪异。</p><p>第一天来前台报道，发现前台的人屌屌的，没有正式的着装，染着绿色的头发，嚼着口香糖。我心想，创业公司人性化吧。</p><p>我：“您好，我今天入职。”</p><p>前台：“奥，你叫啥”</p><p>我：“我叫 xxx”</p><p>前台：“奥，那你先填个表，我叫人事”</p><p>坐了 20 分钟，没人理我。</p><p>我：“那个人事怎么还不来”</p><p>前台：“应该路上堵车了，要不你在等会”</p><p>又过了二十分钟</p><p>人事：“你叫 xxx 吧，那个稍等我打印下合同”</p><p>我：“奥”</p><p>人事：“合同需要你第 xx 页签下字，签完以后这两份我们需要邮寄回总部，所以就签完教给我就好了，我就在隔壁办公室”</p><p>我：“好的”</p><p>没有入职介绍，没有合同细节说明，没有入职小礼品，就这样签完合同来到了工位。</p><p>部门人事过来招呼</p><p>部门人事：“你就是 xx 吧，你的工位在那边，我给你开通一下 oa 系统，然后一会和我去领设备，一会我给你拉我们微信群，待会有个欢迎仪式，新人来要在群里发红包，今后靠老员工多多照顾”</p><p>我：“还要发红包?呃”</p><p>所谓的欢迎仪式真的好尴尬，就如同电视剧里演的一样，部门人事哐哐敲了几下桌子，大喊这，</p><p>部门人事：“大家停一下手上的工作，今天我们有新鲜血液流入我们了，我们的团队又壮大了些”</p><p>然后尴尬的一阵介绍，真的好尴尬，感觉大家都像打了鸡血一样的自来熟那么亲热。</p><h2 id="第二天" tabindex="-1"><a class="header-anchor" href="#第二天"><span>第二天</span></a></h2><p>第二天就开始了正常的工作，领导给我了一个 git 地址，说是我们的项目代码，给我两天时间熟悉一下，然后做一个 ppt 讲一下自己对这些的理解。</p><p>我：“好的，那个，咱们自己测试服务器地址是啥？”</p><p>领导：“嗯，我们现在还没有测试服务器，你自己本地搭建一个测试服务器吧”</p><p>我：“那能保证我这个和线上环境一样吗？”</p><p>领导：“没关系，我们都是这么弄得”</p><p>我：“额。。。行吧”</p><p><strong>我第一次见到这样的开发架构和流程，预感到后期会有大问题出现。</strong></p><p>演示完项目理解，接了第一个活，我曾经预感到这套工作架构的问题终究出现了。</p><p>一个项目我们四五个人开发，各自的测试环境不一致，测试环境测试成功后，提交代码。</p><p><strong>致命的一点是：</strong></p><p><strong>这样一个团队，竟然没有一个完整的代码上线流程。代码上线完全靠领导一人手动操作。</strong></p><p>所以，终究，<strong>可怕的事情发生了。</strong></p><p>各个开发测试环境无问题，上了线一堆 bug，由于手动上线的原因，经常会漏或者忘记上线。线上出现 bug 又得马上回滚，测试环境又无法查出问题。</p><p>第一次的项目上线整整从下午五点上线到了晚上十点才结束。</p><p><strong>我真的是大开眼界。</strong></p><p>而且由于员工的过分热情奋斗经常，听老员工说公司有个不成文的规定，卡时间节点，定下来今天上线的项目，今天上不了线就不回家。</p><h2 id="第三天" tabindex="-1"><a class="header-anchor" href="#第三天"><span>第三天</span></a></h2><p>第三天，我给领导建议：“我建议先搭建好一套上线流程工具，我们再开发，至少我们有个和线上环境一致的测试服务器啊”</p><p>领导：“这个我们一直和总部申请，现在业务也忙，我们自己没时间做这些”</p><p>意思就是不想弄。</p><p>无奈，我也不好再说什么，入职不到一个月，做了第一个项目，我开始有了想离职的念头。</p><p>后续的工作，每天非常繁忙，同时对接三个业务，而且招聘里写的招高级工程师，工作是带领项目组，而发现来了之后大家都是高级工程师，都是硬干业务的。同时，招的是后端开发工程师，前端的活也一并扔给我来干了。</p><h2 id="一个月后" tabindex="-1"><a class="header-anchor" href="#一个月后"><span>一个月后</span></a></h2><p>来了一个月了，我渐渐了解到我的同事的工作背景，他们有的以前是干过销售，有的是在做过软件外包，有的是当过机构老师。正经的计算机系出来的没几个，大多数是上了个编程培训班就出来找工作，混迹好几个小公司，后来到了这儿。</p><p>产品经理设计了一个项目，写了一堆文字。</p><p>我：“我想问下项目原型图有吗，或者 prd 文档模板”</p><p>产品经理：“我写了个 word，你看看”</p><p>我：“你这写的这我知道几个意思”</p><p>产品经理：“按我写的做就好了”</p><p>我：“额。。。”</p><p><strong>我意识到又一个可怕的事情即将发生了。</strong></p><p>由于产品经理不提供设计原型图 prd，只是单纯的用文字描写产品想法。再加上文字功底又不好。同一段文字不同人读理解的不同的意思。</p><p>一个产品，几个开发做不同的东西，开发完成，产品经理说这都不是他想要的。开发说，按着你的文档做的，哪点对不上？产品经理说，你这理解的不对。</p><p>于是，互撕开始了。</p><p>无奈，最终，为了产品，项目推到重做。工作几天全是无用功。</p><p><strong>压垮骆驼的最后一根稻草</strong></p><p>离职的想法已经在我脑子里酝酿，最后让我下定决心的是一次业务上线。</p><p>上线属于测试负责制。</p><p>测试说这个东西上线有问题，就不允许开发走，哪怕耗在那没事可做。</p><p>最后一次业务上线。</p><p>晚上六点上线。</p><p>我：“我代码提交了，我去吃饭，测好了告诉我”</p><p>测试：“你先别走，万一有 bug 方便改”</p><p>我：“我吃个饭就回来”</p><p>测试：“好，有问题我给你打电话”</p><p>刚到楼下，买了份饭，刚吃了两口，一阵急促电话铃。</p><p>测试：“快上来，代码崩溃了，严重问题”</p><p>我：“我吃完上来”</p><p>测试：“别吃了，领导都看到了”</p><p>无奈，我吃了一口，急匆匆上楼，上去一看，是因为数据类型问题，改了一个变量类型，好了，并不是什么大问题。</p><p>测试：“你坐着别走了，有啥问题我好随时给你说”</p><p>我：“奥”</p><p>一晃时间到了九点，我看了看表，这测了两个多小时了，也没啥问题，上线吧。</p><p>上线了，简单看看没啥问题。</p><p>我：&quot;那我走了&quot;</p><p>回家路上走到一半，有一阵仓促的电话铃声。</p><p>测试：“快回来，线上 bug”</p><p>我：“刚才测了两个多小时你说没问题，你同意上线了。十点多了，不行回滚明天搞吧。”</p><p>测试：“不行，今天得上线，你快回来”</p><p>我: &quot;我刚坐上车，你回滚代码，明天再搞吧&quot;</p><p>测试：“那我给领导反馈”</p><p>真的有点生气了，短短十分钟时间，领导的电话不间断的给我打了三次，我没有接听。</p><p>我让司机掉了个头，回去了，花了三分钟时间，看了下线上 bug 是因为线上脏数据造成，删了几条数据，正常了，此时已经是快凌晨一点了。</p><p>一句话没说，第二天来了，领导质问我怎么不接电话，告诉我说工作要认真，并且又重新派给我一个活，告诉我要认真对待。</p><p><strong>我微微一笑，编辑好的离职邮件，点了发送键。并且请了剩余的年假。</strong></p><h2 id="个人感受" tabindex="-1"><a class="header-anchor" href="#个人感受"><span>个人感受</span></a></h2><p>个人认为我们找工作的时候尽量应该比较小的公司，尤其是10、20人这种的小公司，遇到坑的概率非常大！并且，大部分这种规模的小公司最后都死掉了。</p><p>不过，还是有少部分不错的小公司的，这个也不能一棒子打死。</p><hr><p>没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟。</p><ul><li><a href="https://mp.weixin.qq.com/s/E2ko0I0Lts2yoIF-HLBOgw" target="_blank" rel="noopener noreferrer">再见，GitHub trending</a></li><li><a href="https://mp.weixin.qq.com/s/nzR9eKFgEbpPFIkMF40vYw" target="_blank" rel="noopener noreferrer">钱付了订单还是未支付，怎么解决？</a></li><li><a href="https://mp.weixin.qq.com/s/NT4fVbI8hDdN7MQkG2RNdQ" target="_blank" rel="noopener noreferrer">涨薪40%，从国企跳到一家小公司！</a></li><li><a href="https://mp.weixin.qq.com/s/luKyE0O1eGBhUyBuoAONqA" target="_blank" rel="noopener noreferrer">暑假在富士康打工50天，感受如何？</a></li><li><a href="https://mp.weixin.qq.com/s/duEzl6qiM59cHVdFhWB2FA" target="_blank" rel="noopener noreferrer">35 岁危机怎么破？</a></li><li><a href="https://mp.weixin.qq.com/s/R8IonWhFfNk0H1vUgjEadg" target="_blank" rel="noopener noreferrer">面试通过，背调凉了！</a></li><li><a href="https://mp.weixin.qq.com/s/iiGGsfvPzNIcWFdH0LStjw" target="_blank" rel="noopener noreferrer">推荐一些小而美的互联网公司</a></li><li><a href="https://mp.weixin.qq.com/s/WO0MYpWI3m_18Yohe0SzMA" target="_blank" rel="noopener noreferrer">有哪些值得计算机专业加入的国企？</a></li></ul><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-rumrabbitmqzypjdg-53717e59-63c9-44bd-99d3-dd2c26fe68bb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><p>GitHub 上标星 10000+ 的开源知识库《<a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">二哥的 Java 进阶之路</a>》第一版 PDF 终于来了！包括Java基础语法、数组&amp;字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：<a href="https://javabetter.cn/overview/" target="_blank" rel="noopener noreferrer">太赞了，GitHub 上标星 10000+ 的 Java 教程</a></p><p>微信搜 <strong>沉默王二</strong> 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 <strong>222</strong> 即可免费领取。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',108),o=[n];function i(c,l){return p(),t("div",null,o)}const h=e(a,[["render",i],["__file","20ren-it-quma.html.vue"]]),d=JSON.parse('{"path":"/xuexijianyi/20ren-it-quma.html","title":"不到 20 人的 IT 公司该去吗？","lang":"zh-CN","frontmatter":{"title":"不到 20 人的 IT 公司该去吗？","shortTitle":"不到 20 人的 IT 公司该去吗？","author":"Shawn","tag":["学习建议"],"category":["学习建议"],"description":"二哥的编程星球已经有 740 多名 球友加入了，如果你也需要一个良好的学习氛围，戳链接加入我们吧！这是一个Java学习指南+编程实战+LeetCode 刷题的私密圈子，你可以向二哥提问、帮你制定学习计划、和球友一起打卡成长，冲冲冲。 周末就不分享技术了。今天早上在知乎看到一个挺有意思的话题：不到 20 人的 IT 公司该去吗？ 回答区有一位老哥分享了自...","head":[["meta",{"property":"og:url","content":"https://javabetter.cn/xuexijianyi/20ren-it-quma.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"不到 20 人的 IT 公司该去吗？"}],["meta",{"property":"og:description","content":"二哥的编程星球已经有 740 多名 球友加入了，如果你也需要一个良好的学习氛围，戳链接加入我们吧！这是一个Java学习指南+编程实战+LeetCode 刷题的私密圈子，你可以向二哥提问、帮你制定学习计划、和球友一起打卡成长，冲冲冲。 周末就不分享技术了。今天早上在知乎看到一个挺有意思的话题：不到 20 人的 IT 公司该去吗？ 回答区有一位老哥分享了自..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-budrditgsgqm-092ccdf7-12ac-4ca0-81b0-0d7fc193ffdc.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-25T09:46:09.000Z"}],["meta",{"property":"article:author","content":"Shawn"}],["meta",{"property":"article:tag","content":"学习建议"}],["meta",{"property":"article:modified_time","content":"2024-07-25T09:46:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"不到 20 人的 IT 公司该去吗？\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-budrditgsgqm-092ccdf7-12ac-4ca0-81b0-0d7fc193ffdc.jpg\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-rumrabbitmqzypjdg-53717e59-63c9-44bd-99d3-dd2c26fe68bb.png\\",\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png\\"],\\"dateModified\\":\\"2024-07-25T09:46:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Shawn\\"}]}"]]},"headers":[{"level":2,"title":"第一天","slug":"第一天","link":"#第一天","children":[]},{"level":2,"title":"第二天","slug":"第二天","link":"#第二天","children":[]},{"level":2,"title":"第三天","slug":"第三天","link":"#第三天","children":[]},{"level":2,"title":"一个月后","slug":"一个月后","link":"#一个月后","children":[]},{"level":2,"title":"个人感受","slug":"个人感受","link":"#个人感受","children":[]}],"git":{"createdTime":1662296687000,"updatedTime":1721900769000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":9,"words":2700},"filePathRelative":"xuexijianyi/20ren-it-quma.md","localizedDate":"2022年9月4日","excerpt":"<blockquote>\\n<p><a href=\\"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">二哥的编程星球</a>已经有 <strong>740 多名</strong> 球友加入了，如果你也需要一个良好的学习氛围，<a href=\\"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">戳链接</a>加入我们吧！这是一个Java学习指南+编程实战+LeetCode 刷题的私密圈子，你可以向二哥提问、帮你制定学习计划、和球友一起打卡成长，冲冲冲。</p>\\n</blockquote>","autoDesc":true}');export{h as comp,d as data};
