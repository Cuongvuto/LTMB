Vũ Duy Cương - 22810310290
Dưới đây là so sánh giữa **FlatList** và **SectionList** trong React Native dựa trên các tiêu chí mà bạn yêu cầu:

---

### 1. **Mục đích sử dụng**:
| **FlatList**                           | **SectionList**                           |
|----------------------------------------|-------------------------------------------|
| Dùng để hiển thị danh sách các mục (items) phẳng (không phân nhóm). | Dùng để hiển thị danh sách có cấu trúc phân nhóm, ví dụ như danh mục sản phẩm, danh sách theo ngày, v.v. |
| Phù hợp khi không cần nhóm dữ liệu, ví dụ: danh sách bài viết, danh sách sản phẩm, danh bạ đơn giản. | Phù hợp khi cần nhóm các mục theo tiêu đề hoặc phân loại, ví dụ: danh sách sản phẩm theo danh mục, lịch trình sự kiện. |

---

### 2. **Cấu trúc dữ liệu**:
| **FlatList**                           | **SectionList**                           |
|----------------------------------------|-------------------------------------------|
| Cần một mảng đơn giản, ví dụ: `[item1, item2, item3]`. | Cần một mảng các đối tượng, mỗi đối tượng có các thuộc tính `title` (tên nhóm) và `data` (mảng chứa các mục trong nhóm). |
| **Ví dụ**:                             | **Ví dụ**:                                |
| ```                                     | ```                                       |
| const data = ['Item 1', 'Item 2'];     | const sections = [                        |
|                                       |   { title: 'Group 1', data: ['A', 'B'] }, |
|                                       |   { title: 'Group 2', data: ['C'] },      |
|                                       | ];                                        |
| ```                                     | ```                                       |

---

### 3. **Hiệu năng**:
| **FlatList**                           | **SectionList**                           |
|----------------------------------------|-------------------------------------------|
| **Hiệu năng tốt hơn** khi làm việc với danh sách phẳng, vì không cần xử lý dữ liệu theo nhóm. | Hiệu năng có thể thấp hơn nếu dữ liệu quá lớn, vì phải xử lý nhóm và tiêu đề của từng nhóm. |
| FlatList sử dụng cơ chế "lazy loading" (tải dần) để tối ưu hóa việc hiển thị khi danh sách dài. | SectionList cũng hỗ trợ "lazy loading", nhưng việc hiển thị thêm các header cho từng nhóm có thể tăng thêm chi phí. |
| Thích hợp hơn cho danh sách có số lượng mục lớn (vài nghìn mục). | Phù hợp hơn cho danh sách phân nhóm với số lượng nhóm và mục vừa phải. |

---

### 4. **Tính dễ sử dụng**:
| **FlatList**                           | **SectionList**                           ||----------------------------------------|-------------------------------------------|
| **Dễ sử dụng hơn**, vì chỉ cần cung cấp một mảng dữ liệu và định nghĩa `renderItem`. | Cần cấu trúc dữ liệu phức tạp hơn (các nhóm và các mục), và phải xử lý cả `renderItem` và `renderSectionHeader`. |
| Không cần quan tâm đến tiêu đề nhóm. | Cần xử lý thêm logic và giao diện cho tiêu đề nhóm. |
| **Ví dụ sử dụng đơn giản**:            | **Ví dụ sử dụng phức tạp hơn**:           |
| ```                                     | ```                                       |
| <FlatList                              | <SectionList                              |
|   data={data}                          |   sections={sections}                    |
|   renderItem={({ item }) =>            |   renderItem={({ item }) =>              |
|     <Text>{item}</Text>} />            |     <Text>{item}</Text>}                 |
|                                       |   renderSectionHeader={({ section }) =>  |
|                                       |     <Text>{section.title}</Text>} />     |
| ```                                     | ```                                       |

---

### **Khi nào nên dùng FlatList và SectionList?**
- **Dùng FlatList**:
  - Khi hiển thị danh sách đơn giản, không cần nhóm dữ liệu.
  - Ví dụ: danh sách tin nhắn, danh bạ đơn giản, danh sách bài viết.
- **Dùng SectionList**:
  - Khi dữ liệu cần được hiển thị theo nhóm với tiêu đề.
  - Ví dụ: danh mục sản phẩm, lịch trình sự kiện theo ngày, danh sách phân nhóm.
