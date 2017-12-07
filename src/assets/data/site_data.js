export default {
  treeData : [
    {
      title: '前端',
      expanded: true,
      children: [
        {
          title: 'cdn',
          children: [
            {
              title: 'unpkg',
              expanded: true,
              subtitle: 'https://unpkg.com/#/'
            }, {
              title: 'bootCDN',
              expanded: true,
              subtitle: 'http://www.bootcdn.cn/'
            }, {
              title: 'staticCDN',
              expanded: true,
              subtitle: 'https://www.staticfile.org/'
            }, {
              title: 'baiduCDN',
              expanded: true,
              subtitle: 'http://cdn.code.baidu.com/'
            }, {
              title: 'CDNJs',
              expanded: true,
              subtitle: 'https://cdnjs.com/'
            }, {
              title: '今日头条',
              expanded: true,
              subtitle: 'https://cdn.bytedance.com/'
            }
          ]
        }, {
          title: 'react',
          children: []
        }, {
          title: 'vue',
          children: []
        }, {
          title: 'electron',
          children: []
        }, {
          title: '构建及打包工具',
          children: [
            {
              title: 'webpack',
              children: []
            }, {
              title: 'gulp',
              children: []
            }, {
              title: 'grunt',
              children: []
            }
          ]
        }, {
          title: 'webrtc',
          children: [
            {
              title: 'example',
              subtitle: 'https://github.com/webrtc/samples'
            }
          ]
        }
      ]
    }
  ]
}