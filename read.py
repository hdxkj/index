#coding:utf-8
import os
import jieba.analyse

def read_content(content_path):
    '''
    读取目录下的所有文件并合并成一个内容块返回
    '''
    
    # 初始化内容为空
    content = ''
    
    # 使用os模块的listdir函数枚举文件夹下所有文件
    for f in os.listdir(content_path):

        
        # 拼接文件完整路径
        file_fullpath = os.path.join(content_path, f)
        
        # 判断是否是文件
        if os.path.isfile(file_fullpath): 
            print('loading {}'.format(file_fullpath))
            # 将文件内容进行拼接
            content += open(file_fullpath, 'r').read()
            # 每首歌词之间用换行符分隔
            content += '\n'
    print('done loading')
    return content
# 读取文件夹内容
content = read_content('./data')
print('\n显示内容的前面部分...\n')
print(content[:99])

# 这里使用jieba的textrank提取出1000个关键词及其比重
result = jieba.analyse.textrank(content, topK=1000, withWeight=True)

# 生成关键词比重字典
keywords = dict()
for i in result:
    keywords[i[0]] = i[1]
print(keywords)