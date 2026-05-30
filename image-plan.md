# HUAXING PCBA 网站 — 图片规划清单

## 可用图片（不再复用）
1. factory-smt.webp (516×600) — 工程师手持PCBA, 蓝白调
2. factory-quality.webp (550×869) — 质检手检PCBA, 有HUAXING logo
3. hero-factory.webp (550×869) — 工厂场景宣传图
4. hero-hero.webp (550×869) — 工厂场景二号
5. team-factory.webp (1024×931) — 洁净室工人合影
6. app-automotive.webp (1024×640) — 汽车电子
7. app-consumer.webp (1024×640) — 消费电子
8. app-industrial.webp (1024×640) — 工业自动化
9. app-iot.webp (1024×640) — IoT设备
10. app-smarthome.webp (1024×640) — 智能家居
11. app-knx.webp (1024×640) — KNX楼宇控制
12. app-robot.webp (1024×640) — 机器人
13-24. partner-*.webp (11个品牌logo)
25. logo.webp (350×100) — HUAXING logo

## 每页每区图片分配（唯一，不复用）

### 首页 page.tsx
| 区块 | 当前 | 改为 | 说明 |
|------|------|------|------|
| Hero | 纯色渐变 | hero-factory.webp 全宽背景 | 大工厂背景图, 暗色叠加层上放文字 |
| Services | 无图 | factory-smt.webp 侧边装饰 | 工程师手持PCBA |
| Why Choose Us | 无图 | hero-hero.webp 侧边 | 二号工厂图 |
| Partners | 11个logo | 保持(唯一) | 品牌logo |
| CTA | 纯橙渐变 | 无图, 保持纯色CTA | |

### 质量页 quality/page.tsx
| 区块 | 当前 | 改为 | 说明 |
|------|------|------|------|
| Hero | 纯色渐变 | factory-quality.webp 侧边装饰 | 质检图做主视觉 |
| Quality Commitment | factory-quality.webp(已用) | 改为team-factory.webp | 团队质检场景 |

### 关于页 about/page.tsx
| 区块 | 当前 | 改为 | 说明 |
|------|------|------|------|
| Hero | 纯色渐变 | 改为PCBA/电路板概念图(需生成) | 让人一看就知道是PCBA工厂 |
| Company Story | team-factory.webp | 保持 | 团队合影 |
| Factory Section | factory-smt.webp | 保持 | 工程师图 |

### 能力页 capabilities/page.tsx
| 区块 | 当前 | 改为 | 说明 |
|------|------|------|------|
| Hero | 纯色渐变 | app-industrial.webp 背景 | 工业自动化场景 |
| Overview | 无图 | 保持 | 4卡片已有足够内容 |
| Industry Applications | 8张app图 | 保持(唯一,已很好) | |
| QC/QA | 无图 | app-iot.webp 侧边 | IoT测试场景 |

### PCB制造页 pcb-manufacturing/page.tsx
| 区块 | 当前 | 改为 | 说明 |
|------|------|------|------|
| Hero | 纯色渐变 | app-consumer.webp 背景 | 消费电子PCB产线概念 |
| Manufacturing Excellence | hero-factory.webp | 保持 | 已放工厂全景 |

### PCBA组装页 pcb-assembly/page.tsx
| 区块 | 当前 | 改为 | 说明 |
|------|------|------|------|
| Hero | 纯色渐变 | app-robot.webp 背景 | 机器人/自动化组装场景 |
| Assembly Line Overview | factory-smt.webp | 保持 | 已放SMT产线图 |

### 联系页 contact/page.tsx
| 区块 | 当前 | 改为 | 说明 |
|------|------|------|------|
| Hero | 纯色渐变 | app-smarthome.webp 背景 | 智能工厂场景 |
| 表单区 | 无图 | 保持 | |

## 需生成的新图片
1. PCBA电路板概念图 (用于关于页Hero) — 金色电路板+电子元件特写
2. 工厂鸟瞰/生产线全景宽图 (如有需要替换)
