import os
import pymupdf
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_resume(output_pdf_path):
    os.makedirs(os.path.dirname(output_pdf_path), exist_ok=True)
    
    # 0.5 in margins (36 pt)
    margin = 36
    doc = SimpleDocTemplate(
        output_pdf_path,
        pagesize=letter,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=30,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()

    primary_color = colors.HexColor("#111111")
    secondary_color = colors.HexColor("#2B2B2B")
    accent_blue = colors.HexColor("#0C4A8A")
    line_color = colors.HexColor("#B5B5B5")

    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=23,
        leading=26,
        alignment=1, # Center
        textColor=primary_color,
        spaceAfter=3
    )

    title_style = ParagraphStyle(
        'ResumeTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=10.5,
        leading=13.5,
        alignment=1,
        textColor=secondary_color,
        spaceAfter=4
    )

    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.2,
        leading=13,
        alignment=1,
        textColor=secondary_color,
        spaceAfter=6
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=13.5,
        textColor=primary_color,
        spaceBefore=0,
        spaceAfter=0,
        textTransform='uppercase'
    )

    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.6,
        textColor=primary_color,
        alignment=4 # Justify
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.8,
        leading=13.2,
        textColor=primary_color
    )

    job_sub_style = ParagraphStyle(
        'JobSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9.3,
        leading=12.5,
        textColor=secondary_color
    )

    job_meta_style = ParagraphStyle(
        'JobMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.3,
        leading=13.2,
        textColor=secondary_color,
        alignment=2 # Right align
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.4,
        leading=13.4,
        textColor=primary_color,
        leftIndent=14,
        firstLineIndent=-9,
        spaceAfter=3.2
    )

    story = []

    # 1. Header (Name, Title, Contact)
    story.append(Paragraph("AMRITHA", name_style))
    story.append(Paragraph("AI Development Intern &nbsp;|&nbsp; Python &amp; Data Analyst", title_style))
    
    contact_links = (
        '8075325637 &nbsp;|&nbsp; '
        '<a href="mailto:amrithaanup7@gmail.com" color="#0C4A8A"><u>Gmail</u></a> &nbsp;|&nbsp; '
        '<a href="https://www.linkedin.com/in/amritha-anup-79b1a531b" color="#0C4A8A"><u>LinkedIn</u></a> &nbsp;|&nbsp; '
        '<a href="https://adahrma.vercel.app/" color="#0C4A8A"><u>Portfolio</u></a> &nbsp;|&nbsp; '
        '<a href="https://www.instagram.com/amritha.py/" color="#0C4A8A"><u>Instagram</u></a> &nbsp;|&nbsp; '
        'Palakkad, Kerala, India'
    )
    story.append(Paragraph(contact_links, contact_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=line_color, spaceBefore=2, spaceAfter=6))

    # Helper function for section headers
    def add_section_header(title):
        story.append(Paragraph(title, section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.6, color=line_color, spaceBefore=2, spaceAfter=4))

    # 2. Objective
    add_section_header("OBJECTIVE")
    obj_text = (
        "BCA graduate and current intern at Excape AI, building practical experience with AI tools, "
        "structured prompting, AI-assisted websites, design and video creation. Developing Python and "
        "data-analysis skills through independently coded mini-projects and current NumPy practice."
    )
    story.append(Paragraph(obj_text, body_style))

    # 3. Experience
    story.append(Spacer(1, 8))
    add_section_header("EXPERIENCE")

    exp_table_data = [
        [
            Paragraph("<b>AI Data Intern</b> &nbsp;|&nbsp; <i>Excape AI, Malappuram (On-site)</i>", job_title_style),
            Paragraph("June 2026 – Present", job_meta_style)
        ]
    ]
    exp_table = Table(exp_table_data, colWidths=[400, 140])
    exp_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(exp_table)

    exp_bullets = [
        "Explore and evaluate new AI tools for practical creative and development workflows.",
        "Use structured prompting, output testing and iterative refinement across ChatGPT, Gemini and other AI platforms.",
        "Build and refine AI-assisted portfolio and website projects using tools such as Lovable and Antigravity, with deployment on Vercel.",
        "Create AI-assisted design and video outputs, including work with Google Flow and Pomelli, while checking results against project requirements."
    ]
    for b in exp_bullets:
        story.append(Paragraph(f"• &nbsp; {b}", bullet_style))

    # 4. Technical Skills
    story.append(Spacer(1, 8))
    add_section_header("TECHNICAL SKILLS")

    skills_data = [
        "<b>AI &amp; Generative Tools:</b> ChatGPT, Gemini, Google Flow, Antigravity, Pomelli, Lovable, Vercel",
        "<b>Programming &amp; Data:</b> Python, NumPy fundamentals, OOP, functions, loops, lists, dictionaries, file handling, CSV handling, exception handling",
        "<b>Workflow &amp; Deployment:</b> Prompt engineering, AI output testing &amp; refinement, Git/GitHub, Vercel",
        "<b>Currently Learning:</b> NumPy and data-analysis fundamentals"
    ]
    for s in skills_data:
        story.append(Paragraph(f"• &nbsp; {s}", bullet_style))

    # 5. Projects
    story.append(Spacer(1, 8))
    add_section_header("PROJECTS")

    # Project 1
    story.append(Paragraph("<b>Personal Finance Manager</b> &nbsp; <i>| Python</i>", job_title_style))
    story.append(Paragraph("• &nbsp; Tracks categorized expenses, calculates savings, summarizes finances and warns when a fixed budget is exceeded.", bullet_style))

    # Project 2
    story.append(Spacer(1, 3))
    story.append(Paragraph("<b>Automated Employee Payroll System</b> &nbsp; <i>| Python, CSV, OOP</i>", job_title_style))
    story.append(Paragraph("• &nbsp; Reads employee hours from CSV, calculates salary with tax deductions using OOP principles and exports payroll.csv.", bullet_style))

    # 6. Education
    story.append(Spacer(1, 8))
    add_section_header("EDUCATION")

    edu_table_data = [
        [
            Paragraph("<b>University of Calicut</b><br/><font color='#333333'>Bachelor of Computer Applications (BCA)</font>", job_title_style),
            Paragraph("2023 – 2026", job_meta_style)
        ],
        [
            Paragraph("<b>MES School, Olavakkode, Palakkad</b><br/><font color='#333333'>Higher Secondary — Computer Science (Kerala State Board)</font>", job_title_style),
            Paragraph("2023", job_meta_style)
        ]
    ]
    edu_table = Table(edu_table_data, colWidths=[440, 100])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(edu_table)

    # 7. Additional Information
    story.append(Spacer(1, 6))
    add_section_header("ADDITIONAL INFORMATION")
    
    story.append(Paragraph("<b>Languages:</b> English, Malayalam", bullet_style))
    story.append(Paragraph("<b>Strengths:</b> Problem-solving, Creativity, Adaptability, Teamwork, Communication, Attention to detail, Research, Time management", bullet_style))

    doc.build(story)
    print(f"Generated successfully: {output_pdf_path}")

    # Check page count
    pdf_doc = pymupdf.open(output_pdf_path)
    print(f"Total Pages: {len(pdf_doc)}")
    
    # Save preview image
    page = pdf_doc[0]
    pix = page.get_pixmap(dpi=200)
    preview_out = r'C:\Users\USER\.gemini\antigravity-ide\brain\b9bb00dc-0ab7-44dc-99dc-f77363ca77b1\resume_preview.png'
    pix.save(preview_out)
    print("Rendered preview image.")

if __name__ == '__main__':
    target_path = os.path.abspath("public/resume/amritha-anup-resume.pdf")
    generate_resume(target_path)
    
    # Also update aliases
    import shutil
    shutil.copyfile(target_path, os.path.abspath("public/resume/Amritha_Resume.pdf"))
    shutil.copyfile(target_path, os.path.abspath("public/Amritha_Resume.pdf"))
    print("Updated all alias PDF paths.")
