#coding:utf-8
from PIL import Image, ImageSequence
import numpy as np
import matplotlib.pyplot as plt
from wordcloud import WordCloud, ImageColorGenerator

# 初始化图片
image = Image.open('./images/tony_src.png')
graph = np.array(image)

# 生成云图，这里需要注意的是WordCloud默认不支持中文，所以这里需要加载中文黑体字库
wc = WordCloud(font_path='./fonts/simhei.ttf',
    background_color='white', max_words=1000, mask=graph)
wc.generate_from_frequencies(keywords)
image_color = ImageColorGenerator(graph)
# 显示图片
plt.imshow(wc)
plt.imshow(wc.recolor(color_func=image_color))
plt.axis("off") # 关闭图像坐标系
plt.show()